import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Http from "../helpers/Http";
import { useParams } from "react-router-dom";


const Article = ()=>{
    const [article, setArticle] = useState();
    const params = useParams();

    useEffect(()=>{

        Http('get', `/post/${params._id}`)
        .then(res=>{
            if(res){
                setArticle(res.post)
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }, [params._id])

    return(
        <Layout>
            <div className="p-3">
                {
                    article?.content && <div dangerouslySetInnerHTML={{ __html: article?.content }} />
                }
                
            </div>
        </Layout>
    )
}

export default Article;

