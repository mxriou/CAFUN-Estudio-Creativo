import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

type Product = {
  id: string;
  slug: string;
  nombre: string;
  path: string;
  precio: number;
  stock: number;
};

type Props = {
  product: Product;
  onAddToCart: (id: string) => boolean;
};

const formatter = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' });

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    if (product.stock <= 0) return;
    const ok = onAddToCart(product.id);
    if (ok) {
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1500);
    }
  };

  return (
    <article className={styles.card} aria-live="polite">
      <Link
        to={`/producto/${product.slug}`}
        className={styles.mediaLink}
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className={styles.media}>
          <img src={product.path} alt={product.nombre} className={styles.img} />
          <div className={styles.overlay}>
            <span className={styles.overlayText}>Ver Producto</span>
          </div>
        </div>
      </Link>
      <div className={styles.meta}>
        <h3 className={styles.name}>{product.nombre}</h3>
        <div className={styles.price}>{formatter.format(product.precio)}</div>
        <div className={styles.stock}>{product.stock > 0 ? `${product.stock} disponibles` : 'Agotado'}</div>
        <button
          className={styles.btn}
          onClick={handleAdd}
          disabled={product.stock <= 0}
          aria-disabled={product.stock <= 0}
        >
          {product.stock <= 0 ? 'Sin stock' : 'Agregar al carrito'}
        </button>
        {justAdded && <div className={styles.toast}>Agregado ✓</div>}
      </div>
    </article>
  );
};

export default ProductCard;
