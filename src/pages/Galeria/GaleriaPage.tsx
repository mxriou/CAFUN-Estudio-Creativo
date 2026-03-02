import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../components/common/Footer';
import './GaleriaPage.css';
import Masonry from 'masonry-layout';

const GaleriaPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const gridRef = useRef<HTMLDivElement | null>(null);
  const masonryRef = useRef<InstanceType<typeof Masonry> | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const items = Array.from({ length: 19 }).map((_, index) => {
    const imageNum = index + 1;
    const imagePath = `/Galeria-CAFUN/gallery-image${imageNum}.jpeg`;

    return (
        <div key={index} className='galeria-item'>
            <img 
              src={imagePath} 
              alt={`Galeria Image ${imageNum}`} 
              className="galeria-image"
              onLoad={() => setImagesLoaded(prev => prev + 1)}
            />
        </div>
    );
});

  useEffect(() => {
    if (!gridRef.current) return;

    // Inicializar Masonry
    masonryRef.current = new Masonry(gridRef.current, {
      itemSelector: '.galeria-item',
      columnWidth: '.galeria-item',
      gutter: 10,
      percentPosition: false,
      transitionDuration: '0.3s'
    });

    return () => {
      try { 
        if (masonryRef.current) {
          masonryRef.current.destroy(); 
        }
      } catch (e) { /* ignore */ }
    };
  }, []);

  // Recalcular layout cuando las imágenes carguen
  useEffect(() => {
    if (masonryRef.current && imagesLoaded > 0) {
      masonryRef.current.reloadItems();
      masonryRef.current.layout();
    }
  }, [imagesLoaded]);

  return (
    <div className="galeria-root">
      <div className="layout">
        <div className="gallery-grid" ref={gridRef}>
          {items}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GaleriaPage;