import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, deleteFromCart } from '../redux/actions';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th>ID</th>
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
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => dispatch(updateCart(item.id, parseInt(e.target.value)))}
                      style={{ width: '60px' }}
                    />
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => dispatch(updateCart(item.id, item.quantity + 1))}>Update (+1)</button>
                    <button onClick={() => dispatch(deleteFromCart(item.id))} style={{ marginLeft: '5px' }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ${totalCost.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
