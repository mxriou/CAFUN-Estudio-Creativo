import React, { useState } from 'react';
import ProductGrid from '../../components/gallery/ProductGrid';
import FilterSidebar from '../../components/gallery/FilterSidebar';
import Footer from '../../components/common/Footer';
import './PinturasPage.css';

// Generamos 11 pinturas usando las imágenes públicas en /Pinturas/pintura{n}.jpg
const pinturas = Array.from({ length: 12 }).map((_, idx) => {
    const i = idx + 2;
    return {
        id: `pintura-${i}`,
        slug: `pintura-${i}`,
        nombre: `Pintura ${i}`,
        path: `/Pinturas/pintura${i}.jpg`,
        precio: 30000 + (idx % 5) * 5000,
        stock: 3 + (idx % 4),
        category: 'Pinturas',
        createdAt: Date.now() - idx * 1000,
    };
});

const PinturasPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % pinturas.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + pinturas.length) % pinturas.length);

    const current = pinturas[currentIndex];

    const [products, setProducts] = useState(() => pinturas);
    const [sort, setSort] = useState<string>('none');
    const [category, setCategory] = useState<string>('All');

    const categories = Array.from(new Set(products.map((p) => p.category))).filter(Boolean) as string[];

    const handleSortChange = (s: string) => setSort(s);
    const handleCategoryChange = (c: string) => setCategory(c);

    const handleAddToCart = (id: string) => {
        let added = false;
        setProducts((prev) => prev.map((p) => {
            if (p.id === id && p.stock > 0) {
                added = true;
                return { ...p, stock: p.stock - 1 };
            }
            return p;
        }));
        return added;
    };

    const filtered = products
        .filter((p) => category === 'All' ? true : p.category === category)
        .slice();

    if (sort === 'priceAsc') filtered.sort((a, b) => a.precio - b.precio);
    else if (sort === 'priceDesc') filtered.sort((a, b) => b.precio - a.precio);
    else if (sort === 'latest') filtered.sort((a, b) => b.createdAt - a.createdAt);

    return (
        <div className="pinturas-root">
            <div className="pinturas-hero">
                <h1 className="pinturas-title">PINTURAS</h1>
            </div>

            <div className="carousel-section">
                <div className="carousel-bg">
                    <div className="carousel-content">
                        <button className="carousel-btn prev" onClick={handlePrev} aria-label="Anterior">‹</button>
                        <div className="carousel-item">
                            <img src={current.path} alt={current.nombre} className="carousel-img" />
                        </div>
                        <button className="carousel-btn next" onClick={handleNext} aria-label="Siguiente">›</button>
                    </div>
                    <div className="carousel-dots">
                        {pinturas.map((_, idx) => (
                            <button key={idx} className={`dot ${idx === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(idx)} aria-label={`Ir a pintura ${idx + 1}`} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="products-layout" style={{ display: 'flex', gap: 20, padding: '28px 24px', background: '#fff', marginTop: 90 }}>
                <div style={{ flex: '0 0 240px' }}>
                    <FilterSidebar
                        categories={categories}
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

export default PinturasPage;