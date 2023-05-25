import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navmobile">
      <button className="mobile-nav-toggle" onClick={toggleNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      {isOpen && (
        <nav className="mobile-nav-menu">
          <ul>
            <li> <NavLink to="/">Tienda</NavLink></li>
            <li> <NavLink to="/categoria/remeras">Remera</NavLink></li>
            <li> <NavLink to="/categoria/cuadros">Cuadros</NavLink></li>
            <li> <NavLink to="/categoria/almohadones">Almohadones</NavLink></li>
            <li> <NavLink to="/favoritos">Favoritos</NavLink></li>
            <li> <NavLink to="/cart"><CartWidget/></NavLink></li>
        </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
