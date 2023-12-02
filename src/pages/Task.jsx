import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { LuPen } from "react-icons/lu";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { titleFormatter } from "../helpers/Formatter";
import { useGetTaskQuery } from "../store/api";
import { SyncLoader } from "react-spinners";
import override from "../config/spinners";

const Task = ()=>{
    const params = useParams();
    const { data: task, isLoading, error } = useGetTaskQuery(params._id)

    console.log(params._id);


    return(
        <HelmetProvider>
            <Layout>
                {
                    isLoading?  <SyncLoader cssOverride={override} color="#AAA39A" />:(
                    <>
                        {
                            task?.data?.title &&<Helmet>
                                <title>{titleFormatter(task?.data?.title)}</title>
                            </Helmet> 
                        }
                        <div className="d-flex justify-content-between p-3">
                            <h5 className="">{task?.data?.title}</h5>
                            <div className="actions">
                                <Link to={`/update-task/${params._id}`}><LuPen className="cursor-pointer" size={20}/></Link>
                            </div>
                        </div>
                        
                        <div className="p-3">
                            {
                                task?.data?.content && <div dangerouslySetInnerHTML={{ __html: task?.data?.content }} />
                            }
                        </div>
                    </>
                    )
                }
                
            </Layout>
        </HelmetProvider>
    )
}

export default Task;