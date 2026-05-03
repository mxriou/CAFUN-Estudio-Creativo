import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

type Product = {
  id: string;
  slug: string;
  nombre: string;
  path: string;
  precio: number;
  stock: number;
};

type Props = {
  products: Product[];
  onAddToCart: (id: string) => boolean;
};

const ProductGrid: React.FC<Props> = ({ products, onAddToCart }) => {
  return (
    <section className={styles.grid} aria-label="Listado de productos">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </section>
  );
};

export default ProductGrid;
