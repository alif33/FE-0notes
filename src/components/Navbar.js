import { Link } from "react-router-dom"
import { MdAssignmentAdd } from "react-icons/md"
import { HiOutlineViewGridAdd } from "react-icons/hi"

const Navbar = ()=>{
    return(
       <div className="__navbar">
            <div className="d-flex justify-content-between">
                <Link to="/"><h1>DEV</h1></Link>
                <ul>
                    <li><Link to="/make-package"><HiOutlineViewGridAdd size={20} color="#fff"/></Link></li>
                    <li><Link to="/insert"><MdAssignmentAdd size={20} color="#fff"/></Link></li>
                </ul>
            </div>
            
       </div>
    )
}

export default Navbar