import { FC } from 'react';
import ButtonSize from '../../enum/ButtonSize';
import styles from './button.module.css';

interface IButton {
  text: string;
  size: 'big' | 'middle' | 'small';
  icon: string;
}

const Button: FC<IButton> = ({ text, size, icon }) => {
  const addClass = `button_${size}size`;
  return (
    <button
      className={`${styles.button} ${styles[addClass]}`}
      style={{ '--iconUrl': `url(${icon})` } as React.CSSProperties}
    >
      {text}
    </button>
  );
};

export default Button;
