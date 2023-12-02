import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SyncLoader from "react-spinners/SyncLoader";
import Card from "../components/cards/Home";
import Http from "../helpers/Http";
import override from "../config/spinners";
import { getCookie, setCookie } from "../helpers/Cookie";
import { useGetPatternsQuery, useGetProjectsQuery } from "../store/api"

const Home= ()=>{
    const { data: patterns, isLoading } = useGetPatternsQuery();
    const { data: projects } = useGetProjectsQuery();

    console.log(patterns, projects);

    return(
        <Layout>
            {/* <div className="w-[90%] overflow-y-hidden"> */}
            {
                isLoading? <SyncLoader cssOverride={override} color="#AAA39A" />:(
                    <div className="m-4">
                        <h4>Patterns</h4>
                        <div className="row">
                            {
                                patterns?.data && patterns.data.map(
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
            {/* </div> */}
        </Layout>
    )
}

export default Home;    