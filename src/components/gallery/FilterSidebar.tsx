import React from 'react';
import styles from './FilterSidebar.module.css';

type Props = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  sort: string;
  onSortChange: (s: string) => void;
};

const sortOptions = [
  { value: 'latest', label: 'Últimos lanzamientos' },
  { value: 'priceAsc', label: 'Precio: Menor → Mayor' },
  { value: 'priceDesc', label: 'Precio: Mayor → Menor' },
];

const FilterSidebar: React.FC<Props> = ({ categories, selectedCategory, onCategoryChange, sort, onSortChange }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <span>Filtrar</span>
        <span>⚙</span>
      </div>

      <div className={styles.block}>
        {sortOptions.map((opt) => (
          <button
            key={opt.value}
            className={`${styles.filterBtn} ${sort === opt.value ? styles.active : ''}`}
            onClick={() => onSortChange(opt.value)}
          >
            {sort === opt.value && <span className={styles.bullet}>•&nbsp;</span>}
            {opt.label}
          </button>
        ))}
      </div>

      <hr className={styles.divider} />

      <div className={styles.block}>
        {categories.map((c) => (
          <button
            key={c}
            className={`${styles.filterBtn} ${selectedCategory === c ? styles.active : ''}`}
            onClick={() => onCategoryChange(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default FilterSidebar;
