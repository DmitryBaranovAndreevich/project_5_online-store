import { FormEvent } from 'react';
import { useAppDispath, useAppSelector } from '../../hooks/redux';
import { goodsSlice } from '../../store/reducers/GoodsSlice';
import styles from './categoriesList.module.css';

const CategoriesList = ({ list }: { list: Array<string> }) => {
  const { category } = useAppSelector((state) => state.goodsReduser.sortParams.category);

  const dispatch = useAppDispath();

  const { setCategory, sort } = goodsSlice.actions;

  const handleClick = (e: FormEvent) => {
    const el = e.target as HTMLLIElement;
    dispatch(setCategory(el.textContent as string));
    dispatch(sort());
  };
  
  return (
    <ul className={styles.container}>
      {list.map((el, index) => (
        <li className={`${styles.element} ${category === el? styles.active: ''}`} key={el + index} onClick={handleClick}>
          {el}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
