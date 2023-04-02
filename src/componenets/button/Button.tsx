import { FC } from 'react';
import styles from './button.module.css';

interface IButton {
  text: string;
  size: 'big' | 'middle' | 'small' | 'goodItem';
  icon: string;
  onClick: () => void;
}

const Button: FC<IButton> = ({ text, size, icon, onClick }) => {
  const addClass = `button_${size}size`;
  return (
    <button
      className={`${styles.button} ${styles[addClass]}`}
      style={{ '--iconUrl': `url(${icon})` } as React.CSSProperties}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
