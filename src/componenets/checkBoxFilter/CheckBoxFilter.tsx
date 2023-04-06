import { FC, useEffect, useState } from 'react';
import { useAppDispath } from '../../hooks/redux';
import { goodsSlice } from '../../store/reducers/GoodsSlice';
import CheckBox from '../checkBox/CheckBox';
import Input from '../input/Input';
import styles from './checkBoxFilter.module.css';

interface ICheckBoxFilter {
  name: string;
  options: Array<{ text: string; count: number }>;
  paramName: 'brand' | 'manufacturer';
}

const CheckBoxFilter: FC<ICheckBoxFilter> = ({ name, options, paramName }) => {
  const [state, setState] = useState<Array<string>>([]);

  const dispatch = useAppDispath();

  const { setParam, sort } = goodsSlice.actions;

  useEffect(() => {
    dispatch(setParam({ param: paramName, value: state }));
    dispatch(sort());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div className={styles.container}>
      <p className={styles.title}>{name}</p>
      <Input />
      <div className={styles.wrapper}>
        {options.map((el) => (
          <CheckBox key={el.text} {...el} setState={setState} state={state} />
        ))}
      </div>
    </div>
  );
};

export default CheckBoxFilter;
