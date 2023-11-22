import { Link } from "react-router-dom";
import { BsLink45Deg } from "react-icons/bs"

const Card = ({ _id, title, URI }) =>{
    return(
        <div className="pattern col-md-3">
            <div className="d-flex justify-content-between">
                <h6 className="pt-1">{title}</h6>
                <Link to={`/${URI}/${_id}`}>
                    <BsLink45Deg className="cursor-pointer mt-1" color="#000000" size={20}/>
                </Link>
                
            </div>
        </div>
    )
}
export default Card