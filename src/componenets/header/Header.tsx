import ButtonSize from '../../enum/ButtonSize';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import styles from './header.module.css';
import squaresIcon from '../../assets/buttonIcon1.svg';
import loadIcon from '../../assets/loadIcon.png';
import Input from '../input/Input';
import womenImg from '../../assets/women.png';
import Cart from '../cart/Cart';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1400px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-width: 650px)',
  });

  return (
    <header>
      <div className={styles.container}>
        <Logo color={'#000'} />
        {isDesktop && (
          <>
            <Button text={'Каталог'} size={ButtonSize.big} icon={squaresIcon} onClick={() => {}} />
            <Input />
          </>
        )}
        <div className={styles.contacts}>
          {isTablet && (
            <div className={styles.info}>
              <p className={styles.phone}>+7 (777) 490-00-91</p>
              <p className={styles.time}>время работы: 9:00-20:00</p>
              <p className={styles.call}>Заказать звонок</p>
            </div>
          )}
          <img src={womenImg} alt="Women" className={styles.image} />
        </div>
        {isDesktop && (
          <Button text={'Прайс-лист'} size={ButtonSize.big} icon={loadIcon} onClick={() => {}} />
        )}
        <Cart />
      </div>
      {!isDesktop && (
        <div className={styles.container}>
          <Button text={'Каталог'} size={ButtonSize.big} icon={squaresIcon} onClick={() => {}} />
          <Input />
        </div>
      )}
    </header>
  );
};

export default Header;
