import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Http from "../helpers/Http";
import { LuEdit3 } from "react-icons/lu";
import { Helmet } from "react-helmet";
import { titleFormatter } from "../helpers/Formatter";

const Project = ()=>{
    const [project, setProject] = useState();
    const params = useParams();

    useEffect(()=>{

        Http('get', `/project/${params._id}`)
        .then(res=>{
            if(res.data){
                setProject(res.data)
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }, [params._id])


    return(
        <Layout>
            {
                project?.title &&<Helmet>
                    <title>{titleFormatter(project?.title)}</title>
                </Helmet> 
            }
            <div className="d-flex justify-content-between p-3">
                <h5 className="">{project?.title}</h5>
                <div className="actions">
                    <Link to={`/update-project/${params._id}`}><LuEdit3 className="cursor-pointer" size={20}/></Link>
                </div>
            </div>
            
            <div className="p-3">
                {
                    project?.content && <div dangerouslySetInnerHTML={{ __html: project?.content }} />
                }
            </div>
        </Layout>
    )
}

export default Project;