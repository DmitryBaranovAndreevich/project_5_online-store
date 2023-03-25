import styles from './categoriesList.module.css';

const CategoriesList = ({ list }: { list: Array<string> }) => {
  return (
    <ul className={styles.container}>
      {list.map((el, index) => (
        <li className={styles.element} key={el + index}>{el}</li>
      ))}
    </ul>
  );
};

export default CategoriesList;
