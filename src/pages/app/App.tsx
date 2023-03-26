import Footer from '../../componenets/footer/Footer';
import Header from '../../componenets/header/Header';
import { Routes, Route, Link } from 'react-router-dom';
import Main from '../main/Main';
import './App.css';
import GoodsCard from '../goodsCard/GoodsCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/goods/:id" element={<GoodsCard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
