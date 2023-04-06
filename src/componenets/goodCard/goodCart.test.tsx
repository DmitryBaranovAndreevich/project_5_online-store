import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GoodCard from './GoodCard';

const mockCard = {
  id: 4604049097556,
  title: 'Пластификатор для рук',
  description: 'Зашита и уход',
  price: 12.76,
  volume: 0.45,
  size: '45X35',
  brand: 'Carbina',
  manufacturer: 'Henkel',
  category: ['Уход за телом', 'Уход за руками'],
  subCategory: ['Мыло жидкое', 'Гели для душа'],
  images:
    'https://img.freepik.com/free-photo/close-up-of-a-young-woman-hands-holding-jar-of-cream_171337-12781.jpg?w=900&t=st=1679635605~exp=1679636205~hmac=9dca2f52726613b362e754d341d318d3db49358c483ab30dc0a6b751bb7f713d',
};

describe('Product List component Test', () => {
  render(
    <BrowserRouter>
      <GoodCard handleClick={() => {}} {...mockCard} />
    </BrowserRouter>
  );

  const element = screen.getByText(/Штрихкод/i);
  const button = screen.getByText(/В КОРЗИНУ/i);

  it('Компонент карточки товара рендерится', () => {
    expect(element).toBeInTheDocument();
  });

  it('Проверяем обработчик клика на кнопке -', () => {
    button.onclick = jest.fn();
    fireEvent.click(button);
    expect(button.onclick).toHaveBeenCalled();
  });
});
