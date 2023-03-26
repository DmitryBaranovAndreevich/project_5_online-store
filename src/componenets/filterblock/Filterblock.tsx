import { useAppDispath } from '../../hooks/redux';
import getAllBlock from '../../service/getAllBlocks';
import getAllCategoriesInBlock from '../../service/getAllCategoriesInBlock';
import getAllManufacturers from '../../service/getAllManufacturers';
import { goodsSlice } from '../../store/reducers/GoodsSlice';
import CategoriesFilter from '../categoriesFilter/CategoriesFilter';
import CheckBoxFilter from '../checkBoxFilter/CheckBoxFilter';
import Line from '../line/Line';
import PriceRange from '../priceRange/PriceRange';
import styles from './filterBlock.module.css';

const goods = JSON.parse(localStorage.getItem('products') as string);
const blocks = getAllBlock(goods);

const Filterblock = () => {
  const dispatch = useAppDispath();
  const { resetState } = goodsSlice.actions;
  const resetForm = () => dispatch(resetState());
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
      <PriceRange name="Цена ₸" min="0" max="10000" />
      <CheckBoxFilter
        name={'Производитель'}
        options={getAllManufacturers(goods, 'manufacturer')}
        paramName={'manufacturer'}
      />
      <Line />
      <CheckBoxFilter
        name={'Бренд'}
        options={getAllManufacturers(goods, 'brand')}
        paramName={'brand'}
      />
      <div className={styles.buttonContainer}>
        <button className={styles.showButton} type="button">
          Показать
        </button>
        <button className={styles.deleteButton} type="button" onClick={resetForm}></button>
      </div>
      {blocks.map((el) => (
        <div key={el}>
          <CategoriesFilter text={el} options={getAllCategoriesInBlock(el, goods)} />
          <Line />
        </div>
      ))}
    </div>
  );
};

export default Filterblock;
