import { useState } from "react";
import Layout from "../components/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import conf from "../config/react-quill"
import Http from "../helpers/Http";
import { toast } from "react-hot-toast";

const AddProject = ()=>{
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = e =>{
        e.preventDefault()
        Http('post', '/project', {
            title,
            category,
            content
        })
        .then(res=>{
            if(res.success){
                toast.success(`${res.message}`);
                setTitle("");
                setCategory("");
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
                            <select defaultValue={category} onChange={e=>setCategory(e.target.value)} className="form-select">
                                <option>Select Category</option>
                                <option value="flutter">Flutter</option>
                                <option value="laravel">Laravel</option>
                                <option value="nextjs">Next JS</option>
                                <option value="mern">MERN Stack</option>
                            </select>
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

export default AddProject;

