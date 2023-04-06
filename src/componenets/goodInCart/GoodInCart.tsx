import { useEffect, useState } from 'react';
import { Describe, Price, Title } from '../../pages/goodsCard/GoodsCard';
import { TGood } from '../../service/goods';
import Counter from '../counter/Counter';
import { Volume } from '../goodCard/GoodCard';
import styles from './goodInCart.module.css';
import { DeleteButton } from '../filterblock/Filterblock';
import { cartSlice } from '../../store/reducers/CartSlice';
import { useAppDispath } from '../../hooks/redux';

interface IGoodInCart extends TGood {
  count: number;
}

const GoodInCart = ({ images, volume, title, description, price, id, count }: IGoodInCart) => {
  const { removeGood, changeCount } = cartSlice.actions;

  const dispatch = useAppDispath();

  const [countGoods, setCountGoods] = useState(count);

  const handleClick = () => {
    dispatch(removeGood(id));
  };

  useEffect(() => {
    dispatch(changeCount({ id, count: countGoods }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countGoods]);
  
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img className={styles.image} src={images} alt="Foto" />
        <div className={styles.wrapper}>
          <Volume volume={volume} />
          <Title title={title} />
          <Describe text={description} />
        </div>
      </div>
      <Counter count={countGoods} setCount={setCountGoods} />
      <Price price={price} />
      <DeleteButton onClick={handleClick} />
    </div>
  );
};

export default GoodInCart;
