import React from 'react';
import { Route } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    component: () => <h1>Home Page</h1>,
    exact: true,
  },
  {
    path: '/products',
    component: () => <h1>Products Page</h1>,
  },
  {
    path: '/about',
    component: () => <h1>About Page</h1>,
  },
  {
    path: '/contact',
    component: () => <h1>Contact Page</h1>,
  },
];

export const renderRoutes = () => {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={<route.component />}
    />
  ));
};
