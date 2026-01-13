import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const menuItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Colecciones', path: '/colecciones'},
    { label: 'Pinturas', path: '/pinturas'}, 
    { label: 'Artistas', path: '/artistas'},
    { label: 'Galeria', path: '/galeria'},
    { label: 'Nosotros', path: '/nosotros'},
];

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Logo de la empresa */}
            <div className="navbar-logo">
                <div className="logo-image">
                    <img src="/logo-cafun.svg" alt="Cafun Estudio Creativo" />
                </div>
            </div>

            {/* Menú hamburguesa para móviles */}
            <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menú">
                <span className={`hamburger ${open ? 'active' : ''}`}></span>
            </button>

            {/* Menú principal */}
            <ul className={`navbar-menu ${open ? 'active' : ''}`}>
                {menuItems.map((item, index) => (
                    <li key={index} className="menu-item">
                        <Link to={item.path} onClick={() => setOpen(false)}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Iconos de la derecha */}
            <div className="navbar-icons">
                {/* Buscador */}
                <div className="search-container">
                    <button 
                        className="icon-button earch-toggle" 
                        onClick={() => setSearchOpen(!searchOpen)}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                    </button>
                    {searchOpen && (
                        <div className="search-dropdown">
                            <input 
                                type="text" 
                                placeholder="Buscar..." 
                                className="search-input"
                                autoFocus
                            />
                        </div>
                    )}
                </div>

                {/* Carrito de compras */}
                <button className="icon-button cart-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span className="cart-count">0</span>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
