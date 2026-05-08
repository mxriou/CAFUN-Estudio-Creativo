import React, { useState,useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useCart } from '../../contexts/CartContext';

const menuItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Colecciones', path: '/colecciones'},
    { label: 'Pinturas', path: '/pinturas'}, 
    { label: 'Artistas', path: '/artistas'},
    { label: 'Galería', path: '/galeria'},
    { label: 'Nosotros', path: '/nosotros'},
];

const NavBar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    //Estado  del dropdown del carrito 
    const [cartOpen, setCartOpen] = useState(false);
    const drowpdownRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    //Obtener funciones/estado del CartContext
    const { cart, totalItems, removeItem } = useCart();

    useEffect(() => {
        const onDoClick = (e: MouseEvent) => {
            const target = e.target as Node;
            if(cartOpen && drowpdownRef.current && !drowpdownRef.current.contains(target) && buttonRef.current && !buttonRef.current.contains(target)){
                setCartOpen(false);
            }
        };
        document.addEventListener('mousedown', onDoClick);
        return () => document.removeEventListener('mousedown', onDoClick);

    }, [cartOpen]);

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
                    <div style={{ position: 'relative'}}>
                        <button 
                            ref={buttonRef}
                            className="icon-button cart-button"
                            onClick={() => setCartOpen( v => !v )}
                            aria-expanded={cartOpen}
                            aria-label="Abrir Carrito"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1"/>
                                <circle cx="20" cy="21" r="1"/>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                            <span className="cart-count">{totalItems}</span>
                        </button>

                        {/*Dropdown del carrito*/}
                        {cartOpen && (
                            <div ref={drowpdownRef} className="cart-dropdown" role="dialog" aria-label="Carrito de compras">
                                {cart.items.length === 0 ? (
                                    <div className="cart-empty">Tu carrito está vacío</div>
                                ): (
                                    <>
                                        <div className="cart-items">
                                            {cart.items.map((item: any) => (
                                                <div className="cart-row" key={item.id}>
                                                <div className="cart-row-info">
                                                    <div className="cart-row-name">{item.nombre}</div>
                                                    <div className="cart-row-qty">x{item.quantity} • {item.precio}</div>
                                                </div>
                                                <button className="cart-remove" onClick={() => removeItem(item.id)} aria-label={`Eliminar ${item.nombre}`}>Eliminar</button>
                                            </div>
                                            ))}
                                        </div>
                                        <div className="cart-actions">
                                            {/* Rutas de carrito y checkout comentadas - crear páginas si es necesario */}
                                            {/* <Link to="/carrito" className="cart-view-btn" onClick={() => setCartOpen(false)}>Ver Carrito</Link>
                                            <Link to="/checkout" className="cart-checkout-btn" onClick={() => setCartOpen(false)}>Ir a Pagar</Link> */}
                                            <button className="cart-view-btn" onClick={() => setCartOpen(false)}>Ver Carrito</button>
                                            <button className="cart-checkout-btn" onClick={() => setCartOpen(false)}>Ir a Pagar</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
            </div>
        </nav>
    );
};

export default NavBar;
