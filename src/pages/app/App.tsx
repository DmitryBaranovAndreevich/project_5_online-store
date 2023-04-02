import Footer from '../../componenets/footer/Footer';
import Header from '../../componenets/header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from '../main/Main';
import './App.css';
import GoodsCard from '../goodsCard/GoodsCard';
import Cart from '../cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/goods/:id" element={<GoodsCard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
