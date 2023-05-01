import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"


const NavBar = () => {      

    return(
        <ul>
            <li> <NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/categoria/remeras">Remeras</NavLink></li>
            <li> <NavLink to="/categoria/cuadros">Cuadros</NavLink></li>
            <li> <NavLink to="/categoria/almohadones">Almohadones</NavLink></li>
            <li> <NavLink to="/cart"><CartWidget/></NavLink></li>

        </ul>
    )

}


export default NavBar