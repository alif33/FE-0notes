import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SyncLoader from "react-spinners/SyncLoader";
import Card from "../components/cards/Home";
import Http from "../helpers/Http";
import override from "../config/spinners";
import { getCookie, setCookie } from "../helpers/Cookie";

const Home= ()=>{
    const [patterns, setPatterns] = useState();
    const [projects, setProjects] = useState();
    const [loading, setLoading] = useState(true);

    const fetchPatterns = ()=>{
        Http('get', '/patterns')
        .then(res=>{
            if(res.data){
                setPatterns(res.data);
                setLoading(false);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const fetchProjects = ()=>{
        Http('get', '/projects')
        .then(res=>{
            if(res.data){
                setProjects(res.data);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchPatterns();
        fetchProjects();
        const info = {
            id: 345734,
            roll: 45,
            class: "Seven"
        }
        setCookie("name", JSON.stringify(info))
    }, [])

    console.log(getCookie("name"));
    
    return(
        <Layout>
            {
                loading? <SyncLoader cssOverride={override} color="#AAA39A" />:(
                    <div className="m-4">
                        <h4>Patterns</h4>
                        <div className="row">
                            {
                                patterns && patterns.map(
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
                                projects && projects.map(
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