import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/app/App';
import { BrowserRouter } from 'react-router-dom';
import { products } from './service/goods';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

localStorage.setItem('products', JSON.stringify(products));
const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
