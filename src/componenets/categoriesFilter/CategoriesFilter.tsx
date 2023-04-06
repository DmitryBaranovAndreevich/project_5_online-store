import { FC, FormEvent } from 'react';
import { useAppDispath, useAppSelector } from '../../hooks/redux';
import { goodsSlice } from '../../store/reducers/GoodsSlice';
import styles from './categoriesFilter.module.css';

interface ICategoriesFilter {
  text: string;
  options: Array<string>;
}

const CategoriesFilter: FC<ICategoriesFilter> = ({ text, options }) => {
  const { category, subcategory } = useAppSelector(
    (state) => state.goodsReduser.sortParams.category
  );
  const dispatch = useAppDispath();
  const { setCategory, setSubCategory, sort } = goodsSlice.actions;

  const handleClickToCategory = (e: FormEvent) => {
    dispatch(setCategory(text));
    dispatch(sort());
  };

  const handleClickToSubCategory = (e: FormEvent) => {
    const el = e.target as HTMLButtonElement;
    dispatch(setSubCategory(el.textContent as string));
    dispatch(sort());
  };

  return (
    <div className={styles.container}>
      <p className={styles.title} onClick={handleClickToCategory}>
        {text.toUpperCase()}
      </p>
      {category.toLowerCase() === text.toLowerCase() && (
        <div className={styles.wrapper}>
          {options.map((el) => (
            <button
              className={`${styles.button} ${
                el.toLowerCase() === subcategory.toLowerCase() ? styles.active : ''
              }`}
              key={el}
              onClick={handleClickToSubCategory}
            >
              {el}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesFilter;
