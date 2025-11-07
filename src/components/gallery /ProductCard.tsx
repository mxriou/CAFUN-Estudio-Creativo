import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  currency?: string;
  onAddToCart: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  description,
  price,
  currency = 'MXN',
  onAddToCart
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
        <div className="product-overlay">
          <button 
            className="quick-view-btn"
            onClick={() => console.log('Ver detalles:', id)}
          >
            Ver detalles
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <span className="product-price">{formatPrice(price)}</span>
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(id)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

