import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {
  BrowserRouter as Router, 
  Route, 
  Routes
} from 'react-router-dom';
import Success from './pages/Success';

function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/products/:category" element={<ProductList/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/success' element={<Success/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
