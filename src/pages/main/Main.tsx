import { useEffect } from 'react';
import CategoriesList from '../../componenets/categoriesList/CategoriesList';
import Filterblock from '../../componenets/filterblock/Filterblock';
import GoodCard from '../../componenets/goodCard/GoodCard';
import SortSelect from '../../componenets/sortSelect/sortSelect';
import { useAppDispath, useAppSelector } from '../../hooks/redux';
import { TGood } from '../../service/goods';
import { goodsSlice } from '../../store/reducers/GoodsSlice';
import styles from './main.module.css';

const options = [
  { value: 1, text: 'По возрастанию цены' },
  { value: 2, text: 'По убыванию цены' },
  { value: 3, text: 'По названию вверх' },
  { value: 4, text: 'По названию вниз' },
];

const Main = () => {
  const { filterState } = useAppSelector((state) => state.goodsReduser);
  const { getState } = goodsSlice.actions;
  const dispatch = useAppDispath();
  useEffect(() => {
    dispatch(getState());
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Косметика и гигиена</h2>
        <SortSelect label={'Сортировка:'} options={options} />
      </div>
      <CategoriesList list={['Уход за телом', 'Уход за руками']} />
      <div className={styles.main}>
        <Filterblock />
        <div className={styles.wrapper}>
          {filterState.map((el: TGood) => (
            <GoodCard {...el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
