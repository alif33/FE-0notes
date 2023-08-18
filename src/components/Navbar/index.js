import { Link } from "react-router-dom";
import { MdAssignmentAdd } from "react-icons/md";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import styles from "./__.module.css";

const Navbar = ()=>{
    return(
       <div className={styles.__navbar}>
            <div className="d-flex justify-content-between">
                <Link to="/"><h1>DEV</h1></Link>
                <ul>
                    <li><Link to="/add-article"><HiOutlineViewGridAdd size={25} color="#fff"/></Link></li>
                </ul>
            </div>
            
       </div>
    )
}

export default Navbar