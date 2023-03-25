import CategoriesList from '../../componenets/categoriesList/CategoriesList';
import Filterblock from '../../componenets/filterblock/Filterblock';
import SortSelect from '../../componenets/sortSelect/sortSelect';
import styles from './main.module.css';

const options = [
  { value: 1, text: 'По возрастанию цены' },
  { value: 2, text: 'По убыванию цены' },
  { value: 3, text: 'По названию вверх' },
  { value: 4, text: 'По названию вниз' },
];

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Косметика и гигиена</h2>
        <SortSelect label={'Сортировка:'} options={options} />
      </div>
      <CategoriesList list={['Уход за телом', 'Уход за руками']} />
      <div>
        <Filterblock />
      </div>
    </div>
  );
};

export default Main;
