import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Pattern from "../components/cards/Pattern";
import Http from "../helpers/Http";

const Home= ()=>{
    const [patterns, setPatterns] = useState();

    const fetchPatterns = ()=>{
        Http('get', '/patterns')
        .then(res=>{
            if(res.data){
                setPatterns(res.data)
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchPatterns()
    }, [])

    return(
        <Layout>
            <div className="m-4">
                <h4>Patterns</h4>
                <div className="row">
                    {
                        patterns && patterns.map(
                            (item, index)=><Pattern 
                                key={index} 
                                _id={item._id}
                                title={item.title} 
                            />)
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Home;    