import { useEffect, useState } from "react";
import { GrTask } from "react-icons/gr";
import { LiaStickyNoteSolid } from "react-icons/lia";
import { HiOutlineViewGrid } from "react-icons/hi";
import { VscSymbolMethod } from "react-icons/vsc";
import Http from "../../helpers/Http";
import { Link, useLocation } from "react-router-dom";
import styles from "./__.module.css";

const Sidebar = ()=>{
    const [posts, setPosts] = useState([]);
    const [filteredPost, setFilteredPost] = useState([]);
    const [query, setQuery] = useState({
        endPoint: "projects",
        path: "p",
        name: "Projects"
    });  
    const location = useLocation();
    const current = location.pathname.split("/").reverse()[0];

    useEffect(()=>{
        Http('get', `/${query.endPoint}`)
        .then(res=>{
            if(res.data){
                setPosts(res.data)
                setFilteredPost(res.data)
            }
        })
    }, [query])

    const handleShift = (endPoint, path, name)=>{
        setQuery({
           endPoint,
           path,
           name 
        })
    }
    const handleChange = e =>{
        const filterdData = posts.filter((__) => {
            const title = __.title.toString().toLowerCase();
            return title.includes(e.target.value.toString().toLowerCase());
        });
        setFilteredPost(filterdData); 
    }

    return(
        <div className={styles.sidebar}>
            <div className={styles.top_bar}>
                <ul>
                    <li><GrTask onClick={()=>handleShift("projects", "p", "Projects")} className="cursor-pointer" size={17}/></li>
                    <li><HiOutlineViewGrid onClick={()=>handleShift("articles", "ar", "Articles")} className="cursor-pointer" size={20}/></li>
                    <li><LiaStickyNoteSolid onClick={()=>handleShift("projects", "p", "Projects")} className="cursor-pointer" size={23}/></li>
                    <li><VscSymbolMethod onClick={()=>handleShift("patterns", "pt", "Patterns")} className="cursor-pointer" size={22}/></li>
                </ul>
            </div>
            <div className={styles.search_bar}>
                <input
                    onChange={handleChange}
                    placeholder={`${query.name}`}
                />
            </div>
            <ul>
                {
                    filteredPost?.map((item, index)=>(
                        <li className={`${current===item._id? styles.active: ""}` } key={index}>
                            <Link to={`/${query.path}/${item._id}`}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar