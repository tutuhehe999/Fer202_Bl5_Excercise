import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    catalogs: '',
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...product,
      id: Date.now().toString(),
      price: parseFloat(product.price),
      catalogs: product.catalogs.split(',').map(c => c.trim()),
    };
    dispatch(addProduct(newProduct));
    navigate('/cart');
  };

  return (
    <div className="container mt-4">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input type="text" className="form-control" name="name" value={product.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" step="0.01" className="form-control" name="price" value={product.price} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={product.description} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Catalogs (comma separated)</label>
          <input type="text" className="form-control" name="catalogs" value={product.catalogs} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
