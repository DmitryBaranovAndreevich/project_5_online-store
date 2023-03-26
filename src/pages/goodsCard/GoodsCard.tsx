import { useParams } from 'react-router-dom';
import Button from '../../componenets/button/Button';
import { useAppDispath, useAppSelector } from '../../hooks/redux';
import IGood from '../../interfaces/IGood';
import styles from './goodsCard.module.css';
import cartIcon from '../../assets/cartIconWhite.png';
import { goodsSlice } from '../../store/reducers/GoodsSlice';
import { useEffect, useState } from 'react';
import Counter from '../../componenets/counter/Counter';

const GoodsCard = () => {
  const { getState } = goodsSlice.actions;
  const dispatch = useAppDispath();
  useEffect(() => {
    dispatch(getState());
  }, []);
  const { goods } = useAppSelector((state) => state.goodsReduser);
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const good = goods.find((el) => String(el.id) === id) as IGood;
  return (
    <div className={styles.container}>
      {good && (
        <div className={styles.wrapper}>
          <img src={good.images} alt="Foto" className={styles.image} />
          <div className={styles.about}>
            <p className={styles.status}>В наличие</p>
            <p className={styles.title}>{good.title}</p>
            <p className={styles.volume}>{good.volume}</p>
            <div className={styles.wrapper2}>
              <p className={styles.price}>{good.price} ₸</p>
              <Counter count={count} setCount={setCount} />
              <Button text={'В КОРЗИНУ'} size={'goodItem'} icon={cartIcon} />
            </div>
            <div className={styles.wrapper2}>
              <button className={styles.shareButton}></button>
              <p className={styles.message}>
                При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области
              </p>
              <button className={styles.priceTable}>Прайс-лист</button>
            </div>
            <p className={styles.manufacturer}>
              Производитель: <span className={styles.span}>{good.manufacturer}</span>
            </p>
            <p className={styles.brand}>
              Бренд: <span className={styles.span}>{good.brand}</span>
            </p>
            <p className={styles.id}>
              Артикул: <span className={styles.span}>{id}</span>
            </p>
            <p className={styles.id}>
              Штрихкод: <span className={styles.span}>{id}</span>
            </p>
            <span className={`${styles.span} ${styles.margin}`}>Описание</span>
            <p className={styles.id}>{good.description}</p>
            <div className={styles.borderBottom}></div>
            <span className={`${styles.span} ${styles.margin}`}>Характеристики</span>
            <p className={styles.brand}>
              Назначение: <span className={styles.span}>{good.subCategory}</span>
            </p>
            <p className={styles.brand}>
              Тип: <span className={styles.span}>{good.category}</span>
            </p>
            <p className={styles.brand}>
              Производитель: <span className={styles.span}>{good.manufacturer}</span>
            </p>
            <p className={styles.brand}>
              Бренд: <span className={styles.span}>{good.brand}</span>
            </p>
            <p className={styles.brand}>
              Артикул: <span className={styles.span}>{good.id}</span>
            </p>
            <p className={styles.brand}>
              Штрихкод: <span className={styles.span}>{good.id}</span>
            </p>
            <p className={styles.brand}>
              Обьем: <span className={styles.span}>{good.volume}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoodsCard;
