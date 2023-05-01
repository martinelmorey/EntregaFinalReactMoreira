import NavBar from './NavBar';
import { NavLink } from 'react-router-dom';




const Header = () => {

    return(
        <header className="header">
            <li> <NavLink to="/"><img src="/images/rementerprises.png" className="logorem" alt="Rem Enterprises" /></NavLink></li>
            <NavBar />
        </header>
    )

}


export default Header