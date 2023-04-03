import { useEffect, useState } from 'react';
import GoodInCart from '../../componenets/goodInCart/GoodInCart';
import { useAppDispath, useAppSelector } from '../../hooks/redux';
import { TGood } from '../../service/goods';
import { cartSlice } from '../../store/reducers/CartSlice';
import { Price } from '../goodsCard/GoodsCard';
import styles from './cart.module.css';

const Cart = () => {
  const { items } = useAppSelector((state) => state.cartReduser);
  const { goods } = useAppSelector((state) => state.goodsReduser);
  const [isSend, setIsSend] = useState(false);
  const { clearState } = cartSlice.actions;
  const dispatch = useAppDispath();
  const goodsArr = items.map((item) => {
    const good = goods.find((good) => good.id === item.id);
    return { item: good, count: item.count };
  }) as Array<{ item: TGood; count: number }>;
  const sum = goodsArr.reduce((priv, el) => priv + el.count * el.item.price, 0).toFixed(2);
  const handleClick = () => {
    dispatch(clearState());
    setIsSend(true);
  };

  useEffect(() => {
    setTimeout(() => setIsSend(false), 3000);
  }, [isSend]);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Корзина</h2>
      {goodsArr.length ? (
        goodsArr.map((good) => <GoodInCart {...good.item} count={good.count} />)
      ) : (
        <p className={styles.message}>Пока в корзине товаров нет</p>
      )}
      {isSend && <p className={styles.messageToSend}>Заказ успешно отправлен</p>}
      <div className={styles.bottomContainer}>
        <button className={styles.submitButton} disabled={!goodsArr.length} onClick={handleClick}>
          Оформить заказ
        </button>
        <Price price={Number(sum)} />
      </div>
    </div>
  );
};

export default Cart;
