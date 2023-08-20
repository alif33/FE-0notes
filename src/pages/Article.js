import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Http from "../helpers/Http";
import { LuEdit3 } from "react-icons/lu";
import Snippets from "../components/article/Snippets";
import Modules from "../components/article/Modules";
import Commands from "../components/article/Commands";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { titleFormatter } from "../helpers/Formatter";


const Article = ()=>{
    const [article, setArticle] = useState();
    const params = useParams();

    useEffect(()=>{

        Http('get', `/article/${params._id}`)
        .then(res=>{
            if(res.data){
                setArticle(res.data)
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }, [params._id])

    return(
        <HelmetProvider>
            <Layout>
                {
                    article?.title &&<Helmet>
                        <title>{titleFormatter(article?.title)}</title>
                    </Helmet> 
                }
                <div className="d-flex justify-content-between p-3">
                    <h5 className="">{article?.title}</h5>
                    <div className="actions">
                        <Link to={`/update-article/${params._id}`}><LuEdit3 className="cursor-pointer" size={20}/></Link>
                    </div>
                </div>
                {
                    article?.commands && article?.commands?.length > 0 && <Commands commands={article?.commands}/>
                }
                {
                    article?.modules && article?.modules?.length > 0 && <Modules modules={article?.modules}/>
                }
                {
                    article?.snippets && article?.snippets?.length > 0 && <Snippets snippets={article?.snippets}/>
                }
                <div className="p-3">
                    {
                        article?.content && <div dangerouslySetInnerHTML={{ __html: article?.content }} />
                    }
                </div>
            </Layout>
        </HelmetProvider>
    )
}

export default Article;

