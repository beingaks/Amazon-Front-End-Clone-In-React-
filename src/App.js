import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
     </BrowserRouter>

    


    </div>
  );
}

export default App;
