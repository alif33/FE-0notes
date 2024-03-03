import { useState } from "react";
import Layout from "../components/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import conf from "../config/react-quill"
import Http from "../helpers/Http";
import { toast } from "react-hot-toast";
import { useGetArticlesQuery } from "../store/api";
import Select from "../components/Select";

const AddTask = ()=>{
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState();
    const [snippets, setSnippets] = useState("");
    const [content, setContent] = useState("");
    const { data: articles, isLoading } = useGetArticlesQuery();

    const handleSubmit = e =>{
        e.preventDefault()
        Http('post', '/task', {
            title,
            article,
            snippets,
            content
        })
        .then(res=>{
            if(res.success){
                toast.success(`${res.message}`);
                setTitle("");
                setContent("");
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const handleChange = e =>setArticle(e.value)


    const options = articles?.data? articles?.data.map(article => ({
        value: article._id,
        label: article.title,
    })): []

    return(
        <Layout>
            <div className="__form">
                <form onSubmit={handleSubmit} className="mt-5">
                    <div className="row">
                        <div className="col-md-8 mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Title"
                                value={title}
                                onChange={e=>setTitle(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <Select options={options} handleChange={handleChange}/>
                        </div>
                    </div>
                    <div onChange={e=>setSnippets(e.target.value)} className="w-full">
                        <textarea className="w-full border py-2 px-2" placeholder="Snippets"></textarea>
                    </div>
                    <div className="mb-3">
                        <ReactQuill {...conf} value={content} onChange={setContent} />
                    </div>
                    <button type="submit" className="btn-submit">Submit</button>
                </form>
            </div>
        </Layout>
    )
}

export default AddTask;
