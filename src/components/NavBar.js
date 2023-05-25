import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"


const NavBar = () => {      

    return(
        <div className="navdesk">
            <ul>
                <li> <NavLink to="/">Tienda</NavLink></li>
                <li> <NavLink to="/categoria/remeras">Remeras</NavLink></li>
                <li> <NavLink to="/categoria/cuadros">Cuadros</NavLink></li>
                <li> <NavLink to="/categoria/almohadones">Almohadones</NavLink></li>
                <li> <NavLink to="/favoritos">Favoritos</NavLink></li>
                <li> <NavLink to="/cart"><CartWidget/></NavLink></li>
            </ul>
        </div>    
    )

}

export default NavBar