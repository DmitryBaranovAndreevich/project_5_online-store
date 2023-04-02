import GoodInCart from '../../componenets/goodInCart/GoodInCart';
import { useAppSelector } from '../../hooks/redux';
import { TGood } from '../../service/goods';
import styles from './cart.module.css';

const Cart = () => {
  const { items } = useAppSelector((state) => state.cartReduser);
  const { goods } = useAppSelector((state) => state.goodsReduser);
  const goodsArr = items.map((item) => {
    const good = goods.find((good) => good.id === item.id);
    return { item: good, count: item.count };
  }) as Array<{ item: TGood; count: number }>;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Корзина</h2>
      {goodsArr.length ? (
        goodsArr.map((good) => <GoodInCart {...good.item} count={good.count} />)
      ) : (
        <p className={styles.message}>Пока в корзине товаров нет</p>
      )}
    </div>
  );
};

export default Cart;
