import { Toaster } from "react-hot-toast"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = ({ children }) =>{
    return(
        <>
            <Navbar/>
            <Toaster position="top-center" reverseOrder={false}/>
            <div className="__body">
                <Sidebar/>
                <div className="content">{ children }</div>
            </div>
        </>
    )
}
export default Layout