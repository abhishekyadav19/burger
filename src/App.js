import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBarNav from './components/products/AppBarNav';
import { CartList } from './components/products/CartList';
import { Notifications } from './components/products/Notifications';
import { Home } from './components/products/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBarNav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart-list' element={<CartList />} />
          <Route path='/notfications' element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
