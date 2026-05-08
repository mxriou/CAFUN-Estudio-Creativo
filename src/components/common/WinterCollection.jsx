import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './WinterCollection.css';

const WinterCollection = () => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: 'chamarra-landing-1',
      nombre: 'Chamarra de Mezclilla',
      precio: 4500,
    });
    alert('✓ Chamarra de Mezclilla agregada al carrito');
  };

  return (
    <section className="wc-section">
      {/* Círculo rojo con texto — detrás de la chamarra izquierda */}
      <div className="wc-badge">
        <span className="wc-badge-title wc-badge-info">SPRING COLLECTION</span>
        <span className="wc-badge-date wc-badge-info">04/2026</span>
      </div>

      {/* Chamarra de fondo (izquierda) */}
      <div className="wc-left">
        <img
          src="/Chamarras/chamarra-1.svg"
          alt="Winter Collection"
          className="wc-bg-jacket"
        />
      </div>

      {/* Card de producto (derecha) */}
      <div className="wc-right">
        <div className="wc-card">
          <div className="wc-jacket-float">
            <Link to="/producto/chamarra-mezclilla" onClick={() => window.scrollTo(0, 0)} style={{ display: 'block', width: '100%' }}>
              <img
                src="/Chamarras/chamarra1.png"
                alt="Chamarra de Mezclilla"
                className="wc-product-jacket"
              />
            </Link>
          </div>
          <div className="wc-product-info">
            <button className="wc-add-btn" onClick={handleAddToCart}>
              Agregar al carrito
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
            <h3 className="wc-product-name">CHAMARRA DE MEZCLILLA</h3>
            <p className="wc-product-price">$4,500.00 MXN</p>
            <p className="wc-product-stock">6 DISPONIBLES</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterCollection;
