import React, { useEffect, useState } from 'react';
import "./header.css";
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();
    const [isHome, setIsHome] = useState(location.pathname === '/');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const topHeader = document.getElementById("topHeader");
        if (topHeader) {
            topHeader.scrollIntoView({ behavior: 'smooth' });
        }
        setIsHome(location.pathname === '/');
        setIsMenuOpen(false);
    }, [location]);

    return (
        <header id='topHeader' className={`appHeader ${isHome ? "" : "notHome"}`}>
            <div className="logo" style={{ visibility: !isHome ? "visible" : "hidden", width: !isHome ? "auto" : 0 }}>
                <Link to={'/'}>
                    <img src="/logo192.png" alt="Logo" className="imageLogo" />
                </Link>
            </div>

            {/* Botón hamburguesa */}
            <div className="hamburger" onClick={toggleMenu}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>

            {/* Menú de navegación */}
            <nav className={`appNav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link to={'/'}>Inicio</Link>
                    </li>
                    <li >
                        <Link to={'/#empresa'}>La empresa</Link>
                    </li>
                    <li>
                        <Link to={'/proyectos'}>Proyectos</Link>
                    </li>
                    <li>
                        <Link to={'/contacto'}>Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
