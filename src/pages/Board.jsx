import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { LuPen } from "react-icons/lu";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { titleFormatter } from "../helpers/Formatter";
import { useGetBoardQuery } from "../store/api";
import { SyncLoader } from "react-spinners";
import override from "../config/spinners";

const Board = ()=>{
    const params = useParams();
    const { data: board, isLoading, error } = useGetBoardQuery(params._id)
    const [task, setTask] = useState()

    return(
        <HelmetProvider>
            <Layout hidden={true}>
                {
                    isLoading?  <SyncLoader cssOverride={override} color="#AAA39A" />:(
                    <div className="flex flex-row">
                        <div className="w-[350px] h-body overflow-y-scroll border-r">
                            <ul>
                                {
                                    board?.data?.tasks && board?.data?.tasks.map(
                                        (ta, index)=><li onClick={()=>setTask(ta)} className={`${task?._id===ta._id?"bg-black text-white": "text-black bg-white"} px-2 py-1 cursor-pointer hover:bg-black hover:text-white`} key={index}>{ta.title}</li>)
                                }                                
                            </ul>
                        </div>
                        <div className="w-full h-body overflow-y-scroll">
                            <h1 className="text-3xl pl-2">{board?.data?.title}</h1>
                            <hr />
                            {
                                task && <div>
                                    <div className="bg-black text-[#9CDCFE] px-2 text-lg py-1"><h4>{task.snippets}</h4></div>
                                    <div className="py-3">
                                        <div dangerouslySetInnerHTML={{ __html: task?.content }} />
                                    </div>
                                </div>
                            }
                            
                        </div>
                    </div>
                    )
                }
                
            </Layout>
        </HelmetProvider>
    )
}

export default Board;