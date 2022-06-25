import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './component/common/NavComponent';
import Item from './pages/item/Item';
import { Route, Routes } from 'react-router-dom'
import ItemDetail from './pages/item/ItemDetail';
import Event from './pages/event/Event';
import { useState } from 'react';
import data from './db/data'
import Cart from './pages/cart/Cart';

function App() {
  let [shoes] = useState(data) 

  return (
    <div>
      <NavComponent />
      <div className='main-bg'/>
      <Routes>
        <Route path='/' element={<Item shoes={shoes} />}/>
        <Route path='*' element={<div>없는페이지입니다.</div>}/>
        <Route path='/detail/:id' element={<ItemDetail shoes={shoes} />}/>
        <Route path='/cart' element={<Cart />}/>
        {/* nested routed */}
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰 받기</div>}/>
        </Route>
      </Routes>
    </div>
  );
} 

export default App;