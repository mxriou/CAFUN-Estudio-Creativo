import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import './Gallery.css';

/* Una interface es el conjunto de firmas de metodos que una
clase debe implementar. Se puede definir una interfaz como un
objeto vacio que contiene los nombres de los metodos y sus firmas 
de funcion asociadas. */

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
  dimensions: string;
  material: string;
  type: string;
  certificate: string;
  deliveryInfo: string;
  deliveryTime: string;
  taxesInfo: string;
  images: string[];
}

const Gallery: React.FC = () => {
  // Datos de ejemplo - puedes reemplazar esto con datos de una API
  const [products] = useState<Product[]>([
    {
      id: 1,
      image: '/logo.png', // Imagen de ejemplo, reemplaza con tus imágenes
      title: 'Pinceladas de una Mente Colérica',
      description: 'Una pieza única en existencia, con esta colección la enigmática pieza "Utopías de un Sueño Recurrente", funciona como instrumento para brindarle cubierta a los rincones del subconsciente.',
      price: 62000,
      category: 'pinturas',
      dimensions: '100 x 200 cm',
      material: 'Óleo/Loneta',
      type: 'Bíptico',
      certificate: 'Certificado de Autenticidad',
      deliveryInfo: 'Entregas en toda la República Mexicana',
      deliveryTime: 'Tiempo estimado de entrega de 3 - 7 días dentro del país',
      taxesInfo: 'Se aplicarán impuestos y tarifas de envío al finalizar la compra.',
      images: ['/logo.png', '/logo.png', '/logo.png', '/logo.png'] // Múltiples imágenes para el detalle
    },
    {
      id: 2,
      image: '/logo.png',
      title: 'Reflexiones Abstractas',
      description: 'Obra que explora los límites entre la realidad y la imaginación a través de formas y colores vibrantes.',
      price: 45000,
      category: 'pinturas',
      dimensions: '80 x 120 cm',
      material: 'Acrílico/Lienzo',
      type: 'Pintura única',
      certificate: 'Certificado de Autenticidad',
      deliveryInfo: 'Entregas en toda la República Mexicana',
      deliveryTime: 'Tiempo estimado de entrega de 3 - 7 días dentro del país',
      taxesInfo: 'Se aplicarán impuestos y tarifas de envío al finalizar la compra.',
      images: ['/logo.png', '/logo.png', '/logo.png']
    },
    {
      id: 3,
      image: '/logo.png',
      title: 'Esencia Urbana',
      description: 'Representación contemporánea de la vida en la ciudad moderna, capturando su energía y movimiento.',
      price: 38000,
      category: 'pinturas',
      dimensions: '60 x 90 cm',
      material: 'Óleo/Lienzo',
      type: 'Pintura única',
      certificate: 'Certificado de Autenticidad',
      deliveryInfo: 'Entregas en toda la República Mexicana',
      deliveryTime: 'Tiempo estimado de entrega de 3 - 7 días dentro del país',
      taxesInfo: 'Se aplicarán impuestos y tarifas de envío al finalizar la compra.',
      images: ['/logo.png', '/logo.png', '/logo.png']
    },
    {
      id: 4,
      image: '/logo.png',
      title: 'Naturaleza Silente',
      description: 'Una interpretación única del paisaje natural, donde la tranquilidad se encuentra con la pasión artística.',
      price: 52000,
      category: 'paisajes',
      dimensions: '100 x 150 cm',
      material: 'Óleo/Lienzo',
      type: 'Tríptico',
      certificate: 'Certificado de Autenticidad',
      deliveryInfo: 'Entregas en toda la República Mexicana',
      deliveryTime: 'Tiempo estimado de entrega de 3 - 7 días dentro del país',
      taxesInfo: 'Se aplicarán impuestos y tarifas de envío al finalizar la compra.',
      images: ['/logo.png', '/logo.png', '/logo.png']
    },
    {
      id: 5,
      image: '/logo.png',
      title: 'Geometría Emocional',
      description: 'Fusión perfecta entre formas geométricas y expresión emocional en una composición extraordinaria.',
      price: 41000,
      category: 'abstracto',
      dimensions: '70 x 100 cm',
      material: 'Acrílico/Lienzo',
      type: 'Pintura única',
      certificate: 'Certificado de Autenticidad',
      deliveryInfo: 'Entregas en toda la República Mexicana',
      deliveryTime: 'Tiempo estimado de entrega de 3 - 7 días dentro del país',
      taxesInfo: 'Se aplicarán impuestos y tarifas de envío al finalizar la compra.',
      images: ['/logo.png', '/logo.png', '/logo.png']
    },
    {
      id: 6,
      image: '/logo.png',
      title: 'Retrato del Alma',
      description: 'Una exploración profunda del ser humano a través de trazos expresivos y colores intensos.',
      price: 58000,
      category: 'retratos',
      dimensions: '90 x 120 cm',
      material: 'Óleo/Lienzo',
      type: 'Pintura única',
      certificate: 'Certificado de Autenticidad',
      deliveryInfo: 'Entregas en toda la República Mexicana',
      deliveryTime: 'Tiempo estimado de entrega de 3 - 7 días dentro del país',
      taxesInfo: 'Se aplicarán impuestos y tarifas de envío al finalizar la compra.',
      images: ['/logo.png', '/logo.png', '/logo.png']
    },
    {
      id: 7,
      image: '/Images/gordo.jpeg',
      title: 'Hector Giovani',
      description: 'Artista plastico Yodoconense, entrando en las inmersiones del arte Oaxaqueño',
      price: 3500, 
      category: 'artista',
      dimensions: 'N/A',
      material: 'Lana', 
      type: 'Chamarras', 
      certificate: 'Certificado de Autenticidad',
      deliveryInfo: 'Entregas en todo el mundo',
      deliveryTime: 'Tiempo estimado de entrega de 7 - 15 días fuera del pais', 
      taxesInfo: 'Se aplicarán impuestos y tarifas de envío al finalizar la compra.',
      images: ['/Images/gordo.jpeg'],
    },
  ]);

  const [cartItems, setCartItems] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (productId: number) => {
    //Cuando se colocan los tres puntos antes de una variable (...prev) significa que se incluira el arreglo completo
    setCartItems(prev => [...prev, productId]);
    // Aquí puedes agregar lógica adicional como mostrar notificaciones
    console.log(`Producto ${productId} agregado al carrito`);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBackToGallery = () => {
    setSelectedProduct(null);
  };

  // Si hay un producto seleccionado, mostrar su detalle
  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onAddToCart={handleAddToCart}
        onBackToGallery={handleBackToGallery}
      />
    );
  }

  // Mostrar la galería de productos
  return (
    <section className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Galería de Arte</h2>
          <p className="gallery-subtitle">
            Descubre nuestra colección exclusiva de obras únicas
          </p>
        </div>
        
        <div className="gallery-grid">
          {products.map(product => (
            <div key={product.id} onClick={() => handleProductClick(product)}>
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                onAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="empty-gallery">
            <p>No hay productos disponibles en este momento.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

