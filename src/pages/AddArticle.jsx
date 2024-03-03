import { useState } from "react";
import Layout from "../components/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import conf from "../config/react-quill"
import Http from "../helpers/Http";
import { toast } from "react-hot-toast";

const AddArticle = ()=>{
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [modules, setModules] = useState("");
    const [snippets, setSnippets] = useState("");
    const [configuration, setConfiguration] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = e =>{
        e.preventDefault()
        Http('post', '/article', {
            title,
            category,
            modules,
            snippets,
            configuration,
            content
        })
        .then(res=>{
            if(res.success){
                toast.success(`${res.message}`);
                setTitle("");
                setCategory("");
                setModules("");
                setSnippets("");
                setConfiguration("");
                setContent("");
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return(
        <Layout>
            <div className="__form">
                <form onSubmit={handleSubmit} className="my-5">
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
                            <select defaultValue={category} onChange={e=>setCategory(e.target.value)} className="form-select">
                                <option>Select Category</option>
                                <option value="tool">Tool</option>
                                <option value="package">Package</option>
                                <option value="configuration">Configuration</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <textarea 
                                className="form-control" 
                                placeholder="Modules"
                                value={modules}
                                onChange={e=>setModules(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="col-md-6 mb-3">
                            <textarea 
                                className="form-control" 
                                placeholder="Snippets"
                                value={snippets}
                                onChange={e=>setSnippets(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <textarea 
                                className="form-control" 
                                placeholder="Configuaration"
                                onChange={e=>setConfiguration(e.target.value)}
                            ></textarea>
                        </div>
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

export default AddArticle;

