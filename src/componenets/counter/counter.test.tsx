import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Counter from './Counter';

describe('Product List component Test', () => {
  render(
    <BrowserRouter>
      <Counter count={0} setCount={() => {}} />
    </BrowserRouter>
  );
  const element = screen.getByText(/0/i);
  const buttonMinus = screen.getByText(/-/i);
  const buttonPlus = screen.getByText(/\+/i);

  it('Компонент счетчика рендерится', () => {
    expect(element).toBeInTheDocument();
  });

  it('Проверяем обработчик клика на кнопке -', () => {
    buttonMinus.onclick = jest.fn();
    fireEvent.click(buttonMinus);
    expect(buttonMinus.onclick).toHaveBeenCalled();
  });

  it('Проверяем обработчик клика на кнопке +', () => {
    buttonPlus.onclick = jest.fn();
    fireEvent.click(buttonPlus);
    expect(buttonPlus.onclick).toHaveBeenCalled();
  });
});
