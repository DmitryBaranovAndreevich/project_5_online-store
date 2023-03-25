import { FC } from 'react';
import CheckBox from '../checkBox/CheckBox';
import Input from '../input/Input';
import styles from './checkBoxFilter.module.css';

interface ICheckBoxFilter {
  name: string;
  options: Array<{ text: string; count: number }>;
}

const CheckBoxFilter: FC<ICheckBoxFilter> = ({ name, options }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{name}</p>
      <Input />
      <div className={styles.wrapper}>
        {options.map((el) => (
          <CheckBox key={el.text} {...el} />
        ))}
      </div>
    </div>
  );
};

export default CheckBoxFilter;
