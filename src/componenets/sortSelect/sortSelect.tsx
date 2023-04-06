import { FC, FormEvent } from 'react';
import { useAppDispath } from '../../hooks/redux';
import ISortSelect from '../../interfaces/ISortSelect';
import { goodsSlice } from '../../store/reducers/GoodsSlice';
import styles from './sortSelect.module.css';

const SortSelect: FC<ISortSelect> = ({ label, options }) => {
  const { setSelect, sort } = goodsSlice.actions;
  
  const dispatch = useAppDispath();

  const htmlFor = `${label}-${Math.random()}`;

  const handleChange = (e: FormEvent) => {
    const select = e.target as HTMLSelectElement;
    dispatch(setSelect(select.value as '1' | '2' | '3' | '4'));
    dispatch(sort());
  };

  return (
    <div>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
      </label>
      <select id={htmlFor} className={styles.select} onChange={handleChange}>
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
