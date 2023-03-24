import ButtonSize from '../../enum/ButtonSize';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import styles from './header.module.css';
import squaresIcon from '../../assets/buttonIcon1.svg';
import loadIcon from '../../assets/loadIcon.png';
import Input from '../input/Input';
import womenImg from '../../assets/women.png';
import Cart from '../cart/Cart';

const Header = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <Button text={'Каталог'} size={ButtonSize.big} icon={squaresIcon} />
      <Input />
      <div className={styles.contacts}>
        <div className={styles.info}>
          <p className={styles.phone}>+7 (777) 490-00-91</p>
          <p className={styles.time}>время работы: 9:00-20:00</p>
          <p className={styles.call}>Заказать звонок</p>
        </div>
        <img src={womenImg} alt="Women" className={styles.image} />
      </div>
      <Button text={'Прайс-лист'} size={ButtonSize.big} icon={loadIcon} />
      <Cart />
    </header>
  );
};

export default Header;
