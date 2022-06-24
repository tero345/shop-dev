import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './component/common/NavComponent';
import Item from './pages/item/Item';
import { Route, Routes } from 'react-router-dom'
import ItemDetail from './pages/item/ItemDetail';
import Event from './pages/event/Event';
import { useState } from 'react';
import data from './db/data'
import axios from 'axios'

function App() {
  let [shoes, setShoes] = useState(data) 

  return (
    <div>
      <NavComponent />
      <div className='main-bg'/>
      <Routes>
        <Route path='/' element={<Item shoes={shoes} />}/>
        <Route path='*' element={<div>없는페이지입니다.</div>}/>
        <Route path='/detail/:id' element={<ItemDetail shoes={shoes} />}/>

        {/* nested routed */}
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰 받기</div>}/>
        </Route>
      </Routes>
      <button onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
          .then(res => {
            // 배열을 합칠때 ... 은 [] 를 벗기는 용도? 사용
            let newData = [...shoes, ...res.data];
            setShoes(newData)
          })
          .catch(error => console.log(error))
      }}>가져오기</button>
    </div>
  );
} 

export default App;