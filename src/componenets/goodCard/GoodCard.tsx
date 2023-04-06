import { TGood } from '../../service/goods';
import Button from '../button/Button';
import cartIcon from '../../assets/cartIconWhite.png';
import styles from './goodCard.module.css';
import { useNavigate } from 'react-router-dom';
import { Paragraf } from '../../pages/goodsCard/GoodsCard';

export const Volume = ({ volume }: { volume: number }) => {
  return <p className={styles.volume}>{volume}</p>;
};

interface IGoodCard extends TGood {
  handleClick: ({ id, count }: { id: number; count: number }) => void;
}

const GoodCard = ({
  images,
  volume,
  title,
  id,
  manufacturer,
  brand,
  price,
  handleClick,
}: IGoodCard) => {
  const navigate = useNavigate();

  const navigateTo = () => navigate(`/goods/${id}`);
  
  return (
    <div className={styles.container}>
      <img src={images} alt="Good" className={styles.image} onClick={navigateTo} />
      <Volume volume={volume} />
      <p className={styles.title}>{title}</p>
      <Paragraf title={'Штрихкод'} text={String(id)} />
      <Paragraf title={'Производитель'} text={manufacturer} />
      <Paragraf title={'Бренд'} text={brand} />
      <div className={styles.wrapper}>
        <p className={styles.price}>{price} ₸</p>
        <Button
          text={'В КОРЗИНУ'}
          size={'goodItem'}
          icon={cartIcon}
          onClick={() => handleClick({ id, count: 1 })}
        />
      </div>
    </div>
  );
};

export default GoodCard;
