import { useEffect } from 'react';
import CategoriesList from '../../componenets/categoriesList/CategoriesList';
import Filterblock from '../../componenets/filterblock/Filterblock';
import GoodCard from '../../componenets/goodCard/GoodCard';
import SortSelect from '../../componenets/sortSelect/sortSelect';
import { useAppDispath, useAppSelector } from '../../hooks/redux';
import { TGood } from '../../service/goods';
import { goodsSlice } from '../../store/reducers/GoodsSlice';
import styles from './main.module.css';
import { cartSlice } from '../../store/reducers/CartSlice';

const options = [
  { value: 1, text: 'По возрастанию цены' },
  { value: 2, text: 'По убыванию цены' },
  { value: 3, text: 'По названию вверх' },
  { value: 4, text: 'По названию вниз' },
];

const Main = () => {
  const { filterState } = useAppSelector((state) => state.goodsReduser);
  const { getState } = goodsSlice.actions;
  const { addGood } = cartSlice.actions;
  const dispatch = useAppDispath();
  useEffect(() => {
    dispatch(getState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = ({ id, count }: { id: number; count: number }) =>
    dispatch(addGood({ id, count }));
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
            <GoodCard {...el} key={el.id} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
