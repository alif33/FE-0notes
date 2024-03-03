import { useState } from "react";
import Layout from "../components/Layout";
import "react-quill/dist/quill.snow.css";
import Http from "../helpers/Http";
import { toast } from "react-hot-toast";

const AddPackage = ()=>{

    const [title, setTitle] = useState('');

    const handleSubmit = e =>{
        e.preventDefault()
        Http('post', '/pattern', {
            title,
        })
        .then(res=>{
           if(res.success){
            toast.success(`${res.message}`)
            setTitle('')
           }
        })
    }

    return(
        <Layout>
            <div className="__form">
                <form onSubmit={handleSubmit} className="mt-5">
                    <div className="row">
                        <div className="col-md-7 mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Pattern Name"
                                onChange={e=>setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn-submit">Submit</button>
                </form>
            </div>
        </Layout>
    )
}

export default AddPackage;

