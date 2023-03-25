import getAllBlock from '../../service/getAllBlocks';
import getAllCategoriesInBlock from '../../service/getAllCategoriesInBlock';
import getAllManufacturers from '../../service/getAllManufacturers';
import { TGood } from '../../service/goods';
import CategoriesFilter from '../categoriesFilter/CategoriesFilter';
import CheckBoxFilter from '../checkBoxFilter/CheckBoxFilter';
import Line from '../line/Line';
import PriceRange from '../priceRange/PriceRange';
import styles from './filterBlock.module.css';

const goods = JSON.parse(localStorage.getItem('products') as string);
const blocks = getAllBlock(goods);

const Filterblock = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
      <PriceRange name="Цена ₸" min="0" max="10000" />
      <CheckBoxFilter name={'Производитель'} options={getAllManufacturers(goods, 'manufacturer')} />
      <Line />
      <CheckBoxFilter name={'Бренд'} options={getAllManufacturers(goods, 'brand')} />
      <div className={styles.buttonContainer}>
        <button className={styles.showButton}>Показать</button>
        <button className={styles.deleteButton}></button>
      </div>
      {blocks.map((el) => (
        <>
          <CategoriesFilter text={el.toUpperCase()} options={getAllCategoriesInBlock(el, goods)} />
          <Line />
        </>
      ))}
    </div>
  );
};

export default Filterblock;
