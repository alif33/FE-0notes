import { Toaster } from "react-hot-toast"
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import styles from "./__.module.css";

const Layout = ({ children }) =>{
    return(
        <>
            <Navbar/>
            <Toaster position="top-center" reverseOrder={false}/>
            <div className={styles.__body}>
                <Sidebar/>
                <div className="content">{ children }</div>
            </div>
        </>
    )
}
export default Layout