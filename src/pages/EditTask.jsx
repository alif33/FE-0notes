import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import conf from "../config/react-quill"
import Http from "../helpers/Http";
import { toast } from "react-hot-toast";
import Select from "../components/Select";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTaskQuery, useUpdateTaskMutation } from "../store/api";
import { useGetArticlesQuery } from "../store/api";

const EditTask = ()=>{
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState();
    const [snippets, setSnippets] = useState("");
    const [content, setContent] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    const { data: task, isLoading } = useGetTaskQuery(params._id);
    const { data: articles } = useGetArticlesQuery();
    const [ mutate ] =useUpdateTaskMutation()

    useEffect(()=>{
        if(task){
            setTitle(task?.data.title)
            setArticle(task?.data.article)
            setSnippets(task?.data.snippets)
            setContent(task?.data.content)
        }
    }, [task])

    const handleChange = e =>setArticle(e.value)

    const options = articles?.data? articles?.data.map(article => ({
        value: article._id,
        label: article.title,
    })): []

    const handleSubmit = e =>{
        e.preventDefault()

        mutate({
            _id:params._id,
            title,
            article,
            snippets,
            content
        }, {
            onSuccess: (data) => {
              console.log('Article updated successfully', data);
            },
            onError: (error) => {
              console.error('Error updating article', error);
            },
        });

        // Http('put', `/task?_id=${params._id}`, {
        //     title,
        //     article,
        //     snippets,
        //     content
        // })
        // .then(res=>{
        //     if(res.success){
        //         toast.success(`${res.message}`);
        //         navigate(-1);
        //     }
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
    }



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
                            <Select value={article} options={options} handleChange={handleChange}/>
                        </div>
                    </div>
                    <div onChange={e=>setSnippets(e.target.value)} className="w-full">
                        <textarea defaultValue={snippets} className="w-full border py-2 px-2" placeholder="Snippets"></textarea>
                    </div>
                    <div className="mb-3">
                        <ReactQuill {...conf} value={content} onChange={setContent} />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </Layout>
    )
}

export default EditTask;