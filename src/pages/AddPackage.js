import { useState } from "react";
import Layout from "../components/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import conf from "../config/react-quill"
import Http from "../helpers/Http";
import Multi from "../components/select/Multi";


const AddPackage = ()=>{

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [packageName, setPackageName] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = e =>{
        e.preventDefault()
        Http('post', '/post', {
            title,
            type,
            category,
            content
        })
        .then(res=>{
            console.log(res);
        })
        console.log(title, type, packageName, content);
    }


    const lists = [
        {
            title: "hello",
            content: "world",
            type: "asa"
        }
    ]


    return(
        <Layout>
            <div className="__form">
                <form onSubmit={handleSubmit} className="mt-5">
                    <div className="row">
                        <div className="col-md-7 mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Package Name"
                                onChange={e=>setTitle(e.target.value)}
                            />
                        </div>
                        <div className="col-md-5 mb-3">
                            <Multi lists={lists}/>
                            {/* <select onChange={e=>setCategory(e.target.value)} className="form-select">
                                <option>Select Category</option>
                                <option value="tool">Tool</option>
                                <option value="package">Package</option>
                                <option value="configuration">Configuration</option>
                            </select> */}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </Layout>
    )
}

export default AddPackage;

