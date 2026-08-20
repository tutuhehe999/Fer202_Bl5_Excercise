import React from 'react';
import { Link } from 'react-router-dom';
import { dishes } from '../data';

const DishList = () => {
  return (
    <div>
      <h1>Dish List</h1>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Link to={`/dishes/${dish.id}`}>
              {dish.name} - ${dish.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DishList;
