import NavBar from './NavBar';
import NavMobile from './NavMobile';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { contexto } from '../providers/CustomProvider';


const Header = () => {

    const {nombre} = useContext(contexto)

    return(
        <header className="header">
            <li> <NavLink to="/"><img src="/images/rementerprises.png" className="logorem" alt="Rem Enterprises" /></NavLink></li>
            <NavBar />
            <NavMobile />
            <div className='useradmin'>
                <p><img src="/images/usuario.png" id="userimg" alt="User" />{nombre}</p>
            </div>
        </header>
    )

}


export default Header