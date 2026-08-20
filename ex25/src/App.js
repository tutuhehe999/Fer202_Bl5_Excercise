import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import store from './redux/store';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Redux Thunk Cart</Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/cart">Cart</Link>
              <Link className="nav-link" to="/add-product">Add Product</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-product" element={<ProductForm />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
