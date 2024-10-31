import React from 'react';
import "./header.css";

const Header: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className='appHeader'>
            <nav className='appNav'>
                <ul>
                    <li onClick={() => scrollToSection('inicio')}>Inicio</li>
                    <li onClick={() => scrollToSection('empresa')}>La Empresa</li>
                    <li onClick={() => scrollToSection('proyectos')}>Proyectos</li>
                    <li onClick={() => scrollToSection('contacto')}>Contacto</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;