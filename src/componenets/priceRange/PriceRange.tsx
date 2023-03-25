import { FC } from 'react';
import IPriceRange from '../../interfaces/IPriceRange';
import styles from './priceRange.module.css';

const PriceRange: FC<IPriceRange> = ({ name, min, max }) => {
  return (
    <div>
      <p className={styles.title}>{name}</p>
      <div className={styles.wrapper}>
        <input type="number" placeholder={min} className={styles.input} />
        <span className={styles.span}>-</span>
        <input type="number" placeholder={max} className={styles.input} />
      </div>
    </div>
  );
};

export default PriceRange;
