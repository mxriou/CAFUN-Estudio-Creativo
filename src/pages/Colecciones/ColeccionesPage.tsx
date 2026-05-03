import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import './ColeccionesPage.css';
import ProductGrid from '../../components/gallery/ProductGrid';
import FilterSidebar from '../../components/gallery/FilterSidebar';
import Footer from '../../components/common/Footer';

const baseChamarras = [
  { slug: 'chamarra-mezclilla', nombre: 'Chamarra Mezclilla', path: '/Chamarras/Colecciones/chamarra1.png', precio: 4500, stock: 5, category: 'Chamarras' },
  { slug: 'chamarra-vintag', nombre: 'Chamarra Vintag', path: '/Chamarras/Colecciones/chamarra2.png', precio: 5200, stock: 8, category: 'Chamarras' },
  { slug: 'chamarra-negra', nombre: 'Chamarra Negra', path: '/Chamarras/Colecciones/chamarra3.png', precio: 5900, stock: 0, category: 'Chamarras' },
];

const chamarras = Array.from({ length: 9 }).map((_, idx) => {
  const base = baseChamarras[idx % baseChamarras.length];
  return {
    id: `${base.slug}-${idx}`,
    slug: base.slug,
    nombre: base.nombre,
    path: base.path,
    precio: base.precio,
    stock: base.stock,
    category: base.category,
    createdAt: Date.now() - idx * 1000,
  };
});

const ITEMS_PER_PAGE = 9;

const ColeccionesPage: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const { addItem } = useCart();

  const handleCarouselNext = () => setCarouselIndex((prev) => (prev + 1) % baseChamarras.length);
  const handleCarouselPrev = () => setCarouselIndex((prev) => (prev - 1 + baseChamarras.length) % baseChamarras.length);

  const currentChamarra = baseChamarras[carouselIndex];

  const [products, setProducts] = useState(() => chamarras);
  const [sort, setSort] = useState<string>('none');
  const [category, setCategory] = useState<string>('All');

  const categories = Array.from(new Set(products.map((p) => p.category))).filter(Boolean) as string[];

  const handleSortChange = (s: string) => { setSort(s); setPage(1); };
  const handleCategoryChange = (c: string) => { setCategory(c); setPage(1); };

  const handleAddToCart = (id: string) => {
    const product = products.find(p => p.id === id);
    if (product && product.stock > 0) {
      addItem({ id: product.id, nombre: product.nombre, precio: product.precio });
      setProducts((prev) => prev.map((p) => {
        if (p.id === id && p.stock > 0) return { ...p, stock: p.stock - 1 };
        return p;
      }));
      return true;
    }
    return false;
  };

  const filtered = products
    .filter((p) => category === 'All' ? true : p.category === category)
    .slice();

  if (sort === 'priceAsc') filtered.sort((a, b) => a.precio - b.precio);
  else if (sort === 'priceDesc') filtered.sort((a, b) => b.precio - a.precio);
  else if (sort === 'latest') filtered.sort((a, b) => b.createdAt - a.createdAt);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="colecciones-container">
      <div className="colecciones-hero">
        <h1 className="colecciones-title">COLECCIONES</h1>
      </div>

      <div className="carousel-section">
        <div className="carousel-bg">
          <div className="carousel-content">
            <button className="carousel-btn" onClick={handleCarouselPrev} aria-label="Anterior">‹</button>
            <div className="carousel-item">
              <img src={currentChamarra.path} alt={currentChamarra.nombre} className="carousel-img" />
              <p className="carousel-nombre">{currentChamarra.nombre}</p>
              <p className="carousel-precio">${currentChamarra.precio.toLocaleString('es-MX')} MXN</p>
            </div>
            <button className="carousel-btn" onClick={handleCarouselNext} aria-label="Siguiente">›</button>
          </div>
        </div>
      </div>

      <h2 className="chamarras-heading">✦ CHAMARRAS ✦</h2>

      <div className="products-layout">
        <div className="products-sidebar">
          <FilterSidebar
            categories={categories.concat(['Playeras', 'Pantalones', 'Bufandas']).filter(Boolean)}
            selectedCategory={category}
            onCategoryChange={handleCategoryChange}
            sort={sort}
            onSortChange={handleSortChange}
          />
        </div>
        <div className="products-main">
          <ProductGrid products={paginated} onAddToCart={handleAddToCart} />
          <div className="pagination">
            <button
              className="page-arrow"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >←</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`page-dot${page === i + 1 ? ' page-dot--active' : ''}`}
                onClick={() => setPage(i + 1)}
                aria-label={`Página ${i + 1}`}
              />
            ))}
            <button
              className="page-arrow"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >→</button>
          </div>
        </div>
      </div>

      <section className="colecciones-subscribe">
        <h2 className="subscribe-titulo">SUBSCRIBIRSE</h2>
        <p className="subscribe-subtitulo">
          Suscríbete a nuestra lista de correo para enterarte<br />
          sobre lanzamientos de nuevas colecciones
        </p>
        <hr className="subscribe-hr" />
        <button className="subscribe-btn">Suscribirse</button>
      </section>

      <Footer />
    </div>
  );
};

export default ColeccionesPage;
