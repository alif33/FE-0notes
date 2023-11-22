import { Link } from "react-router-dom";
import { GoTasklist } from "react-icons/go";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import styles from "./__.module.css";

const Navbar = ()=>{
    return(
       <div className={styles.__navbar}>
            <div className="d-flex justify-content-between">
                <Link to="/"><h1>DEV</h1></Link>
                <ul>
                    <li><Link to="/add-project"><GoTasklist size={27} color="#fff"/></Link></li>
                    <li><Link to="/add-article"><HiOutlineViewGridAdd size={25} color="#fff"/></Link></li>
                </ul>
            </div>
            
       </div>
    )
}

export default Navbar