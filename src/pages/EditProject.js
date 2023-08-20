import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import conf from "../config/react-quill"
import Http from "../helpers/Http";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = ()=>{
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        Http('get', `/project/${params._id}`)
        .then(res=>{
            const { data } = res;
            if(data){
                setTitle(data.title);
                setCategory(data.category);
                setContent(data.content);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }, [params._id])

    const handleSubmit = e =>{
        e.preventDefault()
        Http('put', `/project?_id=${params._id}`, {
            title,
            category,
            content
        })
        .then(res=>{
            if(res.success){
                toast.success(`${res.message}`);
                navigate(-1);
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
                            <select value={category} onChange={e=>setCategory(e.target.value)} className="form-select">
                                <option>Select Category</option>
                                <option value="tool">Tool</option>
                                <option value="package">Package</option>
                                <option value="configuration">Configuration</option>
                            </select>
                        </div>
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

export default EditProject;

