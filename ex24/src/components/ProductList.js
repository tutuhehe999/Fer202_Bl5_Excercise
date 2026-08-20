import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const products = [
  {
    id: '1',
    name: 'Example Product 1',
    price: 9.99,
    description: 'This is an example product.',
    catalogs: ['catalog1', 'catalog2'],
  },
  {
    id: '2',
    name: 'Example Product 2',
    price: 19.99,
    description: 'This is another example product.',
    catalogs: ['catalog2', 'catalog3'],
  },
  {
    id: '3',
    name: 'Example Product 3',
    price: 29.99,
    description: 'This is yet another product.',
    catalogs: ['catalog1'],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Product List</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
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
                <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
