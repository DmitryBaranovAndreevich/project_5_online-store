import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button from './Button';

describe('Product List component Test', () => {
     render(
       <BrowserRouter>
         <Button text={'test'} size={'big'} icon={''} onClick={() => {}} />
       </BrowserRouter>
     );
     const element = screen.getByText(/test/i);

  it('Компонент кнопки рендерится', () => {
    expect(element).toBeInTheDocument();
  });

  it('Проверяем обработчик клика на кнопке', () => {
      element.onclick = jest.fn();
      fireEvent.click(element);
      expect(element.onclick).toHaveBeenCalled();
  })
});
