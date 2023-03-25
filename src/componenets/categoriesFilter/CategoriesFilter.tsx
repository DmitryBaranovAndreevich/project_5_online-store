import { FC } from 'react';
import styles from './categoriesFilter.module.css';

interface ICategoriesFilter {
  text: string;
  options: Array<string>;
}

const CategoriesFilter: FC<ICategoriesFilter> = ({ text, options }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{text}</p>
      <div className={styles.wrapper}>
        {options.map((el) => (
          <p>{el}</p>
        ))}
      </div>
    </div>
  );
};

export default CategoriesFilter;
