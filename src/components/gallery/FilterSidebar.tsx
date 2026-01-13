import React from 'react';
import styles from './FilterSidebar.module.css';

type Props = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  sort: string;
  onSortChange: (s: string) => void;
};

const FilterSidebar: React.FC<Props> = ({ categories, selectedCategory, onCategoryChange, sort, onSortChange }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.block}>
        <h4 className={styles.title}>Ordenar</h4>
        <label className={styles.option}>
          <input type="radio" name="sort" checked={sort === 'none'} onChange={() => onSortChange('none')} />
          Más relevante
        </label>
        <label className={styles.option}>
          <input type="radio" name="sort" checked={sort === 'priceAsc'} onChange={() => onSortChange('priceAsc')} />
          Precio: menor → mayor
        </label>
        <label className={styles.option}>
          <input type="radio" name="sort" checked={sort === 'priceDesc'} onChange={() => onSortChange('priceDesc')} />
          Precio: mayor → menor
        </label>
        <label className={styles.option}>
          <input type="radio" name="sort" checked={sort === 'latest'} onChange={() => onSortChange('latest')} />
          Últimos lanzamientos
        </label>
      </div>

      <div className={styles.block}>
        <h4 className={styles.title}>Categorías</h4>
        <ul className={styles.list}>
          <li>
            <button className={`${styles.catBtn} ${selectedCategory === 'All' ? styles.active : ''}`} onClick={() => onCategoryChange('All')}>Todas</button>
          </li>
          {categories.map((c) => (
            <li key={c}>
              <button className={`${styles.catBtn} ${selectedCategory === c ? styles.active : ''}`} onClick={() => onCategoryChange(c)}>{c}</button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default FilterSidebar;
