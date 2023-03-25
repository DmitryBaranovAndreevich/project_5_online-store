import { FC } from 'react';
import ISortSelect from '../../interfaces/ISortSelect';
import styles from './sortSelect.module.css';

const SortSelect: FC<ISortSelect> = ({ label, options }) => {
  const htmlFor = `${label}-${Math.random()}`;
  return (
    <div>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
      </label>
      <select id={htmlFor} className={styles.select}>
        {options.map((option, index) => (
          <option value={option.value} key={option.value + index} className={styles.option}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelect;
