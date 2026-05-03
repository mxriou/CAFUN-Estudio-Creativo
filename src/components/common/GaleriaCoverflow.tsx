import React, { useState } from 'react';
import './GaleriaCoverflow.css';

interface Props {
  images: string[];
}

const GaleriaCoverflow: React.FC<Props> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  const getSlot = (index: number): 'center' | 'left' | 'right' | 'hidden' => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex - 1 + total) % total) return 'left';
    if (index === (activeIndex + 1) % total) return 'right';
    return 'hidden';
  };

  return (
    <div className="cf-wrapper">
      <div className="cf-container">
        {images.map((src, i) => {
          const slot = getSlot(i);
          return (
            <div key={i} className={`cf-slide cf-slide--${slot}`}>
              {(slot === 'left' || slot === 'right') && (
                <div className="cf-overlay" />
              )}
              <img src={src} alt={`Galería ${i + 1}`} className="cf-img" />
            </div>
          );
        })}
      </div>

      <div className="cf-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`cf-dot${i === activeIndex ? ' cf-dot--active' : ''}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Imagen ${i + 1}`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16">
              <polygon
                points="8,1 14,4.5 14,11.5 8,15 2,11.5 2,4.5"
                fill={i === activeIndex ? '#ffffff' : 'transparent'}
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GaleriaCoverflow;
