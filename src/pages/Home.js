import Layout from "../components/Layout";
import Package from "../components/cards/Package";

const Home= ()=>{
    return(
        <Layout>
            <h1>I am the body</h1>
            <div className="row">
                <Package/>
            </div>
        </Layout>
    )
}

export default Home;    