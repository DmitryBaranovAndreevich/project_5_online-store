import { FC } from 'react';
import styles from './checkBox.module.css';

interface ICheckBox {
  text: string;
  count: number;
}

const CheckBox: FC<ICheckBox> = ({ text, count }) => {
  const id = `${text}-${Math.random()}`;
  return (
    <div className={styles.container}>
      <input type="checkbox" id={id} className={styles.input} />
      <label htmlFor={id} className={styles.label}>
        {text}
      </label>
      <p className={styles.count}>({count})</p>
    </div>
  );
};

export default CheckBox;
