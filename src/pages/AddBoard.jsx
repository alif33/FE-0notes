import { useState } from "react";
import Layout from "../components/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import conf from "../config/react-quill"
import Http from "../helpers/Http";
import { toast } from "react-hot-toast";
import { useGetTasksQuery } from "../store/api";
import Select from "../components/Select";
import { useAddBoardMutation } from "../store/api";

const AddBoard = ()=>{
    const [title, setTitle] = useState("")
    const [selectedTasks, setSelectedTasks] = useState([])
    const [content, setContent] = useState("")
    const { data: tasks, isLoading } = useGetTasksQuery()
    const [ addBoard ] = useAddBoardMutation()

    const handleSubmit = async e =>{
        e.preventDefault()
        const tasks = selectedTasks.map(ts=>ts._id)
        const added = await addBoard({ title, tasks, content})
        if(added){
            toast.success(`${added.data.message}`)
            setTitle("")
            setSelectedTasks([])
            setContent("")
        }
    }

    const handleChange = e =>{
        setSelectedTasks([
            ...selectedTasks,
            { _id: e.value, label: e.label }
        ])
    }

    console.log(selectedTasks);

    const options = tasks?.data? tasks?.data.map(ts => ({
        value: ts._id,
        label: ts.title,
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
                    <ul className="list-disc mx-4 mb-3">
                        {
                            selectedTasks.map((item, index)=><li className="py-1" key={index}>{item.label}</li>)
                        }
                    </ul>
                    {/* <div onChange={e=>setTasks(e.target.value)} className="w-full">
                        <textarea className="w-full border py-2 px-2" placeholder="Tasks"></textarea>
                    </div> */}
                    <div className="mb-3">
                        <ReactQuill {...conf} value={content} onChange={setContent} />
                    </div>
                    <button type="submit" className="btn-submit">Submit</button>
                </form>
            </div>
        </Layout>
    )
}

export default AddBoard;