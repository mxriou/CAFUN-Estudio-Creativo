import React, { useState } from 'react';
import './ProductDetailView.css';

interface ProductDetailProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    dimensions: string;
    material: string;
    type: string;
    certificate: string;
    deliveryInfo: string;
    deliveryTime: string;
    taxesInfo: string;
    images: string[];
  };
  onAddToCart: (id: number) => void;
  onBackToGallery: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onAddToCart,
  onBackToGallery
}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="product-detail">
      <div className="product-detail-container">
        {/* Breadcrumbs y botón de regreso */}
        <div className="product-navigation">
          <div className="breadcrumbs">
            <span>HOME</span>
            <span>/</span>
            <span>PINTURAS</span>
          </div>
          <button className="back-button" onClick={onBackToGallery}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            REGRESAR A TODOS LOS ARTÍCULOS
          </button>
        </div>

        <div className="product-content">
          {/* Sección de imágenes (izquierda) */}
          <div className="product-images">
            <div className="main-image">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title}
                className="main-product-image"
              />
            </div>
            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.title} - vista ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Sección de detalles (derecha) */}
          <div className="product-info-detail">
            <h1 className="product-title-detail">{product.title}</h1>
            
            <div className="product-specifications">
              <div className="spec-item">
                <span className="spec-label">Dimensiones:</span>
                <span className="spec-value">{product.dimensions}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Tipo:</span>
                <span className="spec-value">({product.type})</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Material:</span>
                <span className="spec-value">{product.material}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Certificado:</span>
                <span className="spec-value">{product.certificate}</span>
              </div>
            </div>

            <div className="product-description-detail">
              <p>{product.description}</p>
            </div>

            <div className="product-price-detail">
              {formatPrice(product.price)}
            </div>

            <div className="delivery-info">
              <div className="delivery-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16,8 20,8 23,11 23,16 16,16 16,8"></polygon>
                </svg>
                <span>{product.deliveryInfo}</span>
              </div>
            </div>

            <button 
              className="add-to-cart-detail"
              onClick={() => onAddToCart(product.id)}
            >
              AÑADIR AL CARRITO
            </button>

            <div className="additional-info">
              <div className="info-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
                <span>{product.deliveryTime}</span>
              </div>
              <div className="info-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4M12 8h.01"></path>
                </svg>
                <span>{product.taxesInfo}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
