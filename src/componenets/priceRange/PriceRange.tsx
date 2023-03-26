import { FC, FormEvent, useEffect, useRef } from 'react';
import { useAppDispath, useAppSelector } from '../../hooks/redux';
import IPriceRange from '../../interfaces/IPriceRange';
import { goodsSlice } from '../../store/reducers/GoodsSlice';
import styles from './priceRange.module.css';

const PriceRange: FC<IPriceRange> = ({ name, min, max }) => {
  const inputLeftRef = useRef(null);
  const inputRightRef = useRef(null);
  const { setReset } = useAppSelector((state) => state.goodsReduser);
  const { setPriceParams, sort } = goodsSlice.actions;
  const dispatch = useAppDispath();

  useEffect(() => {
    (inputLeftRef.current as unknown as HTMLInputElement).value = '0';
    (inputRightRef.current as unknown as HTMLInputElement).value = '10000';
  }, [setReset]);

  let timeOut: ReturnType<typeof setTimeout>;

  const handleChange = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      if (input.name === 'min' || input.name === 'max') {
        const payload = { param: input.name as 'min' | 'max', value: Number(input.value) };
        dispatch(setPriceParams(payload));
        dispatch(sort());
      }
    }, 300);
  };

  return (
    <div>
      <p className={styles.title}>{name}</p>
      <div className={styles.wrapper}>
        <input
          ref={inputLeftRef}
          type="number"
          placeholder={min}
          className={styles.input}
          name="min"
          onChange={handleChange}
        />
        <span className={styles.span}>-</span>
        <input
          ref={inputRightRef}
          type="number"
          placeholder={max}
          className={styles.input}
          name="max"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PriceRange;
