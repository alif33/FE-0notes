import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Http from "../helpers/Http";
import { LuPen } from "react-icons/lu";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { titleFormatter } from "../helpers/Formatter";
import { useGetProjectQuery } from "../store/api";
import { SyncLoader } from "react-spinners";
import override from "../config/spinners";

const Project = ()=>{
    const params = useParams();
    const { data: project, isLoading } = useGetProjectQuery(params._id)

    return(
        <HelmetProvider>
            <Layout>
                {
                    isLoading?  <SyncLoader cssOverride={override} color="#AAA39A" />:(
                    <>
                        {
                            project?.data?.title &&<Helmet>
                                <title>{titleFormatter(project?.data?.title)}</title>
                            </Helmet> 
                        }
                        <div className="d-flex justify-content-between p-3">
                            <h5 className="">{project?.data?.title}</h5>
                            <div className="actions">
                                <Link to={`/up/${params._id}`}><LuPen className="cursor-pointer" size={20}/></Link>
                            </div>
                        </div>
                        
                        <div className="p-3">
                            {
                                project?.data?.content && <div dangerouslySetInnerHTML={{ __html: project?.data?.content }} />
                            }
                        </div>
                    </>
                    )
                }
                
            </Layout>
        </HelmetProvider>
    )
}

export default Project;