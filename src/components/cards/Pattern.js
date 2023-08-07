import { useEffect, useState } from "react";
import Single from "../select/Single"
import { Link } from "react-router-dom";
import Http from "../../helpers/Http";
import { BsLink45Deg } from "react-icons/bs"

const Pattern = ({ _id, title, items }) =>{
    const [articles, setArticles] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [selected, setSelected] = useState(null);
    const [options, setOptions] = useState([]);

    const fetchArticle = ()=>{
        Http('get', '/articles')
        .then(res=>{
            if(res.data){
                setArticles(res.data)
            }
        })
    }

    useEffect(()=>{
       fetchArticle()
    }, [])

    const handleSelect = e =>{
        console.log(e.value)
        let opt = options
        opt.push(e.value)
        console.log(opt, "MID");
        setOptions([...opt])
    }

    const addToPattern=()=>{

    }


    return(
        <div className="pattern col-md-3">
            <div className="d-flex justify-content-between">
                <h4>{title}</h4>
                <Link to={`/pattern/${_id}`}>
                    <BsLink45Deg className="cursor-pointer mt-1" size={25}/>
                </Link>
                
            </div>
            {/* <div className="row">
                {
                    isAdding &&<div>
                        <Single 
                            lists={articles} 
                            selected={selected} 
                            handleSelect={handleSelect}
                        />
                    </div> 
                }
                {
                    options.map((option, index)=><span key={index} span>
                        {option}
                    </span>)
                }
            </div> */}
            

        </div>
    )
}
export default Pattern