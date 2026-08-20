import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { dishes } from '../data';

const DishDetail = () => {
  const { dishId } = useParams();
  const dish = dishes.find(d => d.id === parseInt(dishId));

  if (!dish) {
    return <h2>Dish not found</h2>;
  }

  return (
    <div>
      <h1>{dish.name}</h1>
      <p><strong>Category:</strong> {dish.category}</p>
      <p><strong>Label:</strong> {dish.label || 'N/A'}</p>
      <p><strong>Price:</strong> ${dish.price}</p>
      <p><strong>Description:</strong> {dish.description}</p>
      <Link to="/dishes">Back to Dish List</Link>
    </div>
  );
};

export default DishDetail;
