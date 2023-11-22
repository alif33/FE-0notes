import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SyncLoader from "react-spinners/SyncLoader";
import Card from "../components/cards/Home";
import Http from "../helpers/Http";
import override from "../config/spinners";
import { getCookie, setCookie } from "../helpers/Cookie";
import { useGetPatternsQuery, useGetProjectsQuery } from "../store/api"

const Home= ()=>{
    // const [projects, setProjects] = useState();
    const { data: paterns, isLoading } = useGetPatternsQuery();
    const { data: projects } = useGetProjectsQuery();



    // const fetchProjects = ()=>{
    //     Http('get', '/projects')
    //     .then(res=>{
    //         if(res.data){
    //             setProjects(res.data);
    //         }
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })
    // }

    // useEffect(()=>{
    //     fetchPatterns();
    //     fetchProjects();
    //     const info = {
    //         id: 345734,
    //         roll: 45,
    //         class: "Seven"
    //     }
    //     setCookie("name", JSON.stringify(info))
    // }, [])
    
    return(
        <Layout>
            {
                isLoading? <SyncLoader cssOverride={override} color="#AAA39A" />:(
                    <div className="m-4">
                        <h4>Patterns</h4>
                        <div className="row">
                            {
                                paterns?.data && paterns.data.map(
                                    (item, index)=><Card 
                                        key={index} 
                                        _id={item._id}
                                        title={item.title} 
                                        URI={"pt"}
                                    />)
                            }
                        </div>
                        <h4 className="mt-4">Projects</h4>
                        <div className="row">
                            {
                                projects?.data && projects.data.map(
                                    (item, index)=><Card 
                                        key={index} 
                                        _id={item._id}
                                        title={item.title} 
                                        URI={"p"}
                                    />)
                            }
                        </div>
                    </div>
                )
            }
           
        </Layout>
    )
}

export default Home;    