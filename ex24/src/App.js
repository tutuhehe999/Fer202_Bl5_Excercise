import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px' }}>
        <h1>Redux Shopping Cart Demo</h1>
        <ProductList />
        <hr />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
