import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = ({ children }) =>{
    return(
        <>
            <Navbar/>
            <div className="__body">
                <Sidebar/>
                <div className="content">{ children }</div>
            </div>
        </>
    )
}
export default Layout