import { Dispatch, FC, SetStateAction } from 'react';
import styles from './counter.module.css';

interface ICounter {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const Counter: FC<ICounter> = ({ count, setCount }) => {
  const clickMinus = () => {
    if (count > 1) setCount(--count);
  };

  const clickPlus = () => {
    setCount(++count);
  };
  return (
    <div className={styles.container}>
      <button className={styles.button} type={'button'} onClick={clickMinus}>
        -
      </button>
      <p className={styles.count}>{count}</p>
      <button className={styles.button} type={'button'} onClick={clickPlus}>
        +
      </button>
    </div>
  );
};

export default Counter;
