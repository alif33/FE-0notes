import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SyncLoader from "react-spinners/SyncLoader";
import Pattern from "../components/cards/Pattern";
import Http from "../helpers/Http";
import override from "../config/spinners";

const Home= ()=>{
    const [patterns, setPatterns] = useState();
    const [loading, setLoading] = useState(true);

    const fetchPatterns = ()=>{
        Http('get', '/patterns')
        .then(res=>{
            if(res.data){
                setPatterns(res.data)
                setLoading(false)
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
            {
                loading? <SyncLoader cssOverride={override} color="#AAA39A" />:(
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
                )
            }
           
        </Layout>
    )
}

export default Home;    