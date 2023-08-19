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


    const handleChange = e =>{
        const filterdData = posts.filter((__) => {
            const title = __.title.toString().toLowerCase();
            return title.includes(e.target.value.toString().toLowerCase());
        });
        setFilteredPost(filterdData); 
    }

    return(
        <div className={styles.sidebar}>
            <div className={styles.search_bar}>
                <input
                    onChange={handleChange}
                    placeholder="keyword"
                />
            </div>
            <ul>
                {
                    filteredPost?.map((item, index)=>(
                        <li key={index}>
                            <Link to={`/ar/${item._id}`}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar