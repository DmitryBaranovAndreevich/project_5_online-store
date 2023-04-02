import { useParams } from 'react-router-dom';
import Button from '../../componenets/button/Button';
import { useAppDispath, useAppSelector } from '../../hooks/redux';
import IGood from '../../interfaces/IGood';
import styles from './goodsCard.module.css';
import cartIcon from '../../assets/cartIconWhite.png';
import { goodsSlice } from '../../store/reducers/GoodsSlice';
import { useEffect, useState } from 'react';
import Counter from '../../componenets/counter/Counter';
import { Volume } from '../../componenets/goodCard/GoodCard';
import { cartSlice } from '../../store/reducers/CartSlice';

export const Paragraf = ({ title, text }: { title: string; text: string }) => {
  return (
    <p className={styles.brand}>
      {title}: <span className={styles.span}>{text}</span>
    </p>
  );
};

export const Describe = ({ text }: { text: string }) => {
  return <p className={styles.id}>{text}</p>;
};

export const Price = ({ price }: { price: number }) => {
  return <p className={styles.price}>{price} ₸</p>;
};

export const Title = ({ title }: { title: string }) => {
  return <p className={styles.title}>{title}</p>;
};

const GoodsCard = () => {
  const { items } = useAppSelector((state) => state.cartReduser);
  const { getState } = goodsSlice.actions;
  const { addGood, changeCount } = cartSlice.actions;
  const dispatch = useAppDispath();
  useEffect(() => {
    dispatch(getState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { goods } = useAppSelector((state) => state.goodsReduser);
  const { id } = useParams();
  const good = goods.find((el) => String(el.id) === id) as IGood;
  const isInCart = items.find((elem) => elem.id === Number(id));
  const [count, setCount] = useState(isInCart ? isInCart.count : 1);
  const handleClick = () => {
    dispatch(addGood({ id: Number(id), count }));
  };

  useEffect(() => {
    isInCart && dispatch(changeCount({ id: Number(id), count }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className={styles.container}>
      {good && (
        <div className={styles.wrapper}>
          <img src={good.images} alt="Foto" className={styles.image} />
          <div className={styles.about}>
            <p className={styles.status}>В наличие</p>
            <Title title={good.title} />
            <Volume volume={good.volume} />
            <div className={styles.wrapper2}>
              <Price price={good.price} />
              <Counter count={count} setCount={setCount} />
              {isInCart ? (
                <p className={styles.message}>&#9989; Уже добавлено в корзину</p>
              ) : (
                <Button
                  text={'В КОРЗИНУ'}
                  size={'goodItem'}
                  icon={cartIcon}
                  onClick={handleClick}
                />
              )}
            </div>
            <div className={styles.wrapper2}>
              <button className={styles.shareButton}></button>
              <p className={styles.message}>
                При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области
              </p>
              <button className={styles.priceTable}>Прайс-лист</button>
            </div>
            <Paragraf text={good.manufacturer} title={'Производитель'} />
            <Paragraf text={good.brand} title={'Бренд'} />
            <Paragraf text={String(id)} title={'Артикул'} />
            <Paragraf text={String(id)} title={'Штрихкод'} />
            <span className={`${styles.span} ${styles.margin}`}>Описание</span>
            <Describe text={good.description} />
            <div className={styles.borderBottom}></div>
            <span className={`${styles.span} ${styles.margin}`}>Характеристики</span>
            <Paragraf text={good.subCategory.join(' ')} title={'Назначение'} />
            <Paragraf text={good.category.join(' ')} title={'Тип'} />
            <Paragraf text={good.manufacturer} title={'Производитель'} />
            <Paragraf text={good.brand} title={'Бренд'} />
            <Paragraf text={String(good.id)} title={'Артикул'} />
            <Paragraf text={String(good.id)} title={'Штрихкод'} />
            <Paragraf text={String(good.volume)} title={'Обьем'} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GoodsCard;
