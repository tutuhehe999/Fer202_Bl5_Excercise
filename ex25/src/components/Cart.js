import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, loadProducts } from '../redux/actions';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Catalogs</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.catalogs.join(', ')}</td>
              <td>
                <button className="btn btn-success btn-sm" onClick={() => dispatch(addToCart(product))}>
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info">Cart is empty</div>
      ) : (
        <>
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeFromCart(item.id))}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="text-end">Total: ${totalCost.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
