import React, { useState } from 'react';
import styles from './ProductCard.module.css';

type Product = {
  id: string;
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
      setTimeout(() => setJustAdded(false), 900);
    }
  };

  return (
    <article className={styles.card} aria-live="polite">
      <div className={styles.media}>
        <img src={product.path} alt={product.nombre} className={styles.img} />
      </div>
      <div className={styles.meta}>
        <h3 className={styles.name}>{product.nombre}</h3>
        <div className={styles.price}>{formatter.format(product.precio)}</div>
        <div className={styles.stock}>{product.stock} disponibles</div>
        <button
          className={styles.btn}
          onClick={handleAdd}
          disabled={product.stock <= 0}
          aria-disabled={product.stock <= 0}
        >
          {product.stock <= 0 ? 'Sin stock' : 'Agregar al carrito'}
          <span className={styles.cartIcon} aria-hidden> 🛒</span>
        </button>
        {justAdded && <div className={styles.toast}>Agregado</div>}
      </div>
    </article>
  );
};

export default ProductCard;
