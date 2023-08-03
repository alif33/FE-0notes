import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"
import Select from "react-select"
import Http from "../helpers/Http";
import { Link } from "react-router-dom";
import Single from "./select/Single"


const Sidebar = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        Http('get', '/articles')
        .then(res=>{
            if(res.data){
                setPosts(res.data)
            }
        })
    }, [])

    return(
        <div className="__sidebar">
            <div className="search-bar">
                <Single lists={ posts }/>
            </div>
            <ul>
                {
                    posts?.map((item, index)=>(
                        <li key={index}>
                            <Link to={`/article/${item._id}`}>{item.title}</Link>
                        </li>
                    ))
                }
                <li>
                    <Link></Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar