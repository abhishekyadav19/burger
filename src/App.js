import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBarNav from './components/products/AppBarNav';
import { CartList } from './components/products/CartList';
import { Notifications } from './components/products/Notifications';
import { Products } from './components/products/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBarNav />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart-list' element={<CartList />} />
          <Route path='/notfications' element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
