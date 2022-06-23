import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './component/common/NavComponent';
import Item from './component/item/Item';

function App() {
  return (
    <div>
      <NavComponent />
      <div className='main-bg'/>
      <Item />
    </div>
  );
}

export default App;
