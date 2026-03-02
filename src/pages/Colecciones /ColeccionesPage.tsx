import React from 'react';
import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import './ColeccionesPage.css';
import ProductGrid from '../../components/gallery/ProductGrid';
import FilterSidebar from '../../components/gallery/FilterSidebar';
import Footer from '../../components/common/Footer';

const baseChamarras = [
  { slug: 'chamarra1', nombre: 'Chamarra Mezclilla', path: '/Chamarras/Colecciones/chamarra1.png', precio: 4500, stock: 5, category: 'Chamarras' },
  { slug: 'chamarra2', nombre: 'Chamarra Vintag', path: '/Chamarras/Colecciones/chamarra2.png', precio: 5200, stock: 8, category: 'Chamarras' },
  { slug: 'chamarra3', nombre: 'Chamarra Negra', path: '/Chamarras/Colecciones/chamarra3.png', precio: 5900, stock: 0, category: 'Chamarras' },
];

// Generamos una lista de productos repetida para simular galería extensa
const chamarras = Array.from({ length: 9 }).map((_, idx) => {
  const base = baseChamarras[idx % baseChamarras.length];
  return {
    id: `${base.slug}-${idx}`,
    nombre: base.nombre,
    path: base.path,
    precio: base.precio,
    stock: base.stock,
    category: base.category,
    createdAt: Date.now() - idx * 1000,
  };
});

const ColeccionesPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { addItem } = useCart();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % chamarras.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + chamarras.length) % chamarras.length);
  };

  const currentChamarra = chamarras[currentIndex];

  // Productos y lógica de filtros/ordenamiento
  const [products, setProducts] = useState(() => chamarras);
  const [sort, setSort] = useState<string>('none');
  const [category, setCategory] = useState<string>('All');

  const categories = Array.from(new Set(products.map((p) => p.category))).filter(Boolean) as string[];

  const handleSortChange = (s: string) => setSort(s);
  const handleCategoryChange = (c: string) => setCategory(c);

  const handleAddToCart = (id: string) => {
    const product = products.find(p => p.id === id);
    if (product && product.stock > 0) {
      // Agregar al CartContext
      addItem({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio,
      });
      
      // Reducir stock local
      setProducts((prev) => prev.map((p) => {
        if (p.id === id && p.stock > 0) {
          return { ...p, stock: p.stock - 1 };
        }
        return p;
      }));
      return true;
    }
    return false;
  };

  // Aplicar filtros y ordenamientos sin recargar la página
  const filtered = products
    .filter((p) => category === 'All' ? true : p.category === category)
    .slice();

  if (sort === 'priceAsc') filtered.sort((a, b) => a.precio - b.precio);
  else if (sort === 'priceDesc') filtered.sort((a, b) => b.precio - a.precio);
  else if (sort === 'latest') filtered.sort((a, b) => b.createdAt - a.createdAt);

  return (
    <div className="colecciones-container">
      <div className="colecciones-hero">
        <h1 className="colecciones-title">COLECCIONES</h1>
      </div>

      {/* Carrusel: fondo full-width guinda + una chamarra por vez */}
      <div className="carousel-section">
          <div className="carousel-bg">
            <div className="carousel-content">
              <button 
                className="carousel-btn prev"
                onClick={handlePrev}
                aria-label="Anterior"
              >
                ‹
              </button>

              <div className="carousel-item">
                <img 
                  src={currentChamarra.path} 
                  alt={currentChamarra.nombre} 
                  className="carousel-img"
                />
              </div>

              <button 
                className="carousel-btn next"
                onClick={handleNext}
                aria-label="Siguiente"
              >
                ›
              </button>
            </div>

            {/* Indicadores (dots) */}
            <div className="carousel-dots">
              {chamarras.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir a chamarra ${idx + 1}`}
                />
              ))}
            </div>
          </div>

      </div>

      {/* Nueva sección: Sidebar + Grid de productos */}
      <div className="products-layout" style={{ display: 'flex', gap: 20, padding: '28px 24px', background: '#fff', marginTop: 90 }}>
        <div style={{ flex: '0 0 240px' }}>
          <FilterSidebar
            categories={categories.concat(['Playeras', 'Pantalones', 'Bufandas']).filter(Boolean)}
            selectedCategory={category}
            onCategoryChange={handleCategoryChange}
            sort={sort}
            onSortChange={handleSortChange}
          />
        </div>

        <div style={{ flex: 1 }}>
          <ProductGrid products={filtered} onAddToCart={handleAddToCart} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ColeccionesPage;