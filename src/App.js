import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './component/common/NavComponent';
import Item from './component/item/Item';
import { Route, Routes } from 'react-router-dom'
import ItemDetail from './component/item/ItemDetail';


function App() {
  return (
    <div>
      <NavComponent />
      <div className='main-bg'/>
      <Routes>
        <Route path='/' element={<Item />}/>
        <Route path='/detail' element={<ItemDetail />}/>
      </Routes>
    </div>
  );
} 

export default App;
