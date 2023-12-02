import { useEffect, useState } from "react";
import { GrTask } from "react-icons/gr";
import { LiaStickyNoteSolid } from "react-icons/lia";
import { VscSymbolMethod } from "react-icons/vsc";
import Http from "../../helpers/Http";
import { Link, useLocation } from "react-router-dom";
import styles from "./__.module.css";
import { useDispatch, useSelector } from "react-redux";
import { shiftingQuery } from "../../store/setting/action";

const Sidebar = ()=>{
    const [posts, setPosts] = useState([]);
    const [filteredPost, setFilteredPost] = useState([]);
    const { query } = useSelector(state=>state.setting);
    const dispatch = useDispatch();

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

    const handleShift = (name, path, endPoint)=>{
        dispatch(shiftingQuery({name, path, endPoint}));
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
                    <li className={`p-1 rounded-sm ${query.name==="Articles" && "bg-[#efefef]"}`}>
                        <img 
                            height={20}
                            width={20}
                            className="cursor-pointer"
                            src="/icons/article.png"
                            onClick={()=>handleShift("Articles", "ar", "articles")} 
                        />
                    </li>
                    <li className={`p-1 ${query.name==="Projects" && "bg-[#efefef]"}`}><GrTask onClick={()=>handleShift("Projects", "p", "projects")} className="cursor-pointer" size={17}/></li>
                    <li className={`p-1 ${query.name==="Patterns" && "bg-[#efefef]"}`}><VscSymbolMethod onClick={()=>handleShift("Patterns", "pt", "patterns")} className="cursor-pointer" size={22}/></li>
                    <li className={`p-1 ${query.name==="Boards" && "bg-[#efefef]"}`}>
                        <img 
                            height={20}
                            width={20}
                            className="cursor-pointer"
                            src="/icons/board.png"
                            onClick={()=>handleShift("Boards", "b", "boards")}
                        />
                    </li>
                    <li className={`p-1 ${query.name==="Tasks" && "bg-[#efefef]"}`}><LiaStickyNoteSolid onClick={()=>handleShift("Tasks",  "t", "tasks")} className="cursor-pointer" size={23}/></li>
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