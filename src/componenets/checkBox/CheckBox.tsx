import { Dispatch, FC, FormEvent, SetStateAction, useEffect, useRef } from 'react';
import { useAppSelector } from '../../hooks/redux';
import styles from './checkBox.module.css';

interface ICheckBox {
  text: string;
  count: number;
  state: string[];
  setState: Dispatch<SetStateAction<string[]>>;
}

const CheckBox: FC<ICheckBox> = ({ text, count, state, setState }) => {
  const id = `${text}-${Math.random()}`;
  const inputRef = useRef(null);
  const { setReset } = useAppSelector((state) => state.goodsReduser);

  useEffect(() => {
    (inputRef.current as unknown as HTMLInputElement).checked = false;
  }, [setReset]);

  const handleClick = (e: FormEvent) => {
    const checkbox = e.target as HTMLInputElement;
    if (state.includes(checkbox.name)) setState(state.filter((el) => el !== checkbox.name));
    else setState([...state, checkbox.name]);
  };

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id={id}
        className={styles.input}
        name={text}
        onChange={handleClick}
        ref={inputRef}
      />
      <label htmlFor={id} className={styles.label}>
        {text}
      </label>
      <p className={styles.count}>({count})</p>
    </div>
  );
};

export default CheckBox;
