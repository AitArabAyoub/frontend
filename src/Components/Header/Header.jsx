import { useContext} from "react"
import { ThemeContext } from "../../App"
import { Link } from "react-router-dom"
function Header() {
    const {Light,handleClick} = useContext(ThemeContext)
    return (
        <nav className="navbar py-2 navbar-dark bg-dark">
            <div className="container">
                <Link to={"/"} className="navbar-brand m-0">
                    Free Express 
                </Link>
                <div className="d-flex">
                    {Light ? <i className="bi bi-brightness-high text-white me-3" role="button" onClick={handleClick}></i> : <i className="bi bi-moon-stars text-white me-3" role="button" onClick={handleClick}></i>}
                    <i className="bi bi-facebook text-white me-3"></i>
                    <i className="bi bi-instagram text-white me-3"></i>
                    <i className="bi bi-twitter text-white"></i>
                </div>
            </div>
        </nav>
    )
}
export default Header