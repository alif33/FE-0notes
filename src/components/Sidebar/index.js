import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"
import Http from "../../helpers/Http";
import { Link } from "react-router-dom";
import styles from "./__.module.css";

const Sidebar = ()=>{
    const [posts, setPosts] = useState([]);
    const [filteredPost, setFilteredPost] = useState([]);

    useEffect(()=>{
        Http('get', '/articles')
        .then(res=>{
            if(res.data){
                setPosts(res.data)
                setFilteredPost(res.data)
            }
        })
    }, [])

    return(
        <div className={styles.sidebar}>
            <div className={styles.search_bar}>
                <input

                />
            </div>
            <ul>
                {
                    filteredPost?.map((item, index)=>(
                        <li key={index}>
                            <Link to={`/article/${item._id}`}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar