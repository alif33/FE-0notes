import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Http from "../helpers/Http";
import { BiAddToQueue } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Pattern = ()=>{
    const [articles, setArticles] = useState();
    const [pattern, setPattern] = useState();
    const [isAdding, setIsAdding] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const params = useParams();

    const fetchPattern = ()=>{
        Http('get', `/pattern/${params._id}`)
        .then(res=>{
            if(res.data){
                setPattern(res.data);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const fetchArticles = ()=>{
        Http('get', '/articles')
        .then(res=>{
            if(res.data){
                setArticles(res.data);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchPattern();
        fetchArticles();
    }, [params._id, isFetching])



    const handleAdded = article =>{
        Http('put', `/pattern/added?_id=${params._id}`, {
            article
        })
        .then(res=>{
            if (res) {
                toast.success(`${res.message}`)
                setIsFetching(!isFetching)
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }


    const handleRemove = article =>{
        Http('put', `/pattern/removed?_id=${params._id}`, {
            article
        })
        .then(res=>{
            if (res) {
                toast.success(`${res.message}`)
                setIsFetching(!isFetching)
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return(
        <HelmetProvider>
            <Layout>
                <Helmet>
                    <title>{ "Ismail H" }</title>
                </Helmet>
                <div className="d-flex justify-content-between p-3 bg-dark text-white">
                    <h5 className="">{pattern?.title}</h5>
                    <div className="actions">
                        <BiAddToQueue 
                            size={20}
                            className="cursor-pointer ml-2" 
                            onClick={()=>setIsAdding(!isAdding)} 
                        />
                    </div>
                </div>

                {
                isAdding && articles && articles.map((item, index)=>{
                        if(true){
                            return(
                                <span 
                                    key={index} 
                                    onClick={()=>handleAdded(item._id)} 
                                    className="selected cursor-pointer"
                                >
                                    {item.title}
                                </span>
                            ) 
                        }
                    })
                }
                <div className="mt-3">
                    {
                        isAdding && pattern?.articles && pattern?.articles.map((item, index)=>(
                            
                            <span 
                                key={index} 
                                className="selected cursor-pointer"
                                onClick={()=>handleRemove(item._id)}
                            >
                                {item.title}
                            </span>
                        ))
                    }
            </div>
                
                <div className="bg-dark text-white">
                    <h5>Configuratioon</h5>
                    {
                        pattern?.articles && pattern?.articles.map((item, index)=>(
                            <span 
                                key={index} 
                                className="ml-2 cursor-pointer"
                            >
                                {item.configuration}
                            </span>
                        ))
                    }
                </div>
                <div className="bg-dark text-white">
                    <h5>Packages</h5>
                    {
                        pattern?.articles && pattern?.articles.map((item, index)=>(
                            <span 
                                key={index} 
                                className="ml-2 cursor-pointer"
                            >
                            {index===0 && "yarn add"}{" "}{item.modules}
                            </span>
                        ))
                    }
                </div>
                <div className="bg-dark text-white">
                    <h5>Snippets</h5>
                    {
                        pattern?.articles && pattern?.articles.map((item, index)=>(
                            <span 
                                key={index} 
                                className="ml-2 cursor-pointer"
                            >
                            {"<"+item.title+">"}  {item.snippets}
                                <br/>
                            </span>
                        ))
                    }
                </div>                
            </Layout>
        </HelmetProvider>
    )
}

export default Pattern;
