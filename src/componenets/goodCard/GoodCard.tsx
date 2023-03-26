import { TGood } from '../../service/goods';
import Button from '../button/Button';
import cartIcon from '../../assets/cartIconWhite.png';
import styles from './goodCard.module.css';
import { useNavigate } from 'react-router-dom';

const GoodCard = ({ images, volume, title, id, manufacturer, brand, price }: TGood) => {
  const navigate = useNavigate();
  const navigateTo = () => navigate(`/goods/${id}`)
  return (
    <div className={styles.container} onClick={navigateTo}>
      <img src={images} alt="Good" className={styles.image} />
      <p className={styles.volume}>{volume}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.id}>
        Штрихкод: <span className={styles.span}>{id}</span>
      </p>
      <p className={styles.manufacturer}>
        Производитель: <span className={styles.span}>{manufacturer}</span>
      </p>
      <p className={styles.brand}>
        Бренд: <span className={styles.span}>{brand}</span>
      </p>
      <div className={styles.wrapper}>
        <p className={styles.price}>{price} ₸</p>
        <Button text={'В КОРЗИНУ'} size={'goodItem'} icon={cartIcon} />
      </div>
    </div>
  );
};

export default GoodCard;
