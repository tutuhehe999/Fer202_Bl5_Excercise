import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import DishList from './components/DishList';
import DishDetail from './components/DishDetail';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '16px', padding: '16px', background: '#333' }}>
            <li><Link to="/users" style={{ color: 'white', textDecoration: 'none' }}>Users</Link></li>
            <li><Link to="/dishes" style={{ color: 'white', textDecoration: 'none' }}>Dishes</Link></li>
          </ul>
        </nav>
        <div style={{ padding: '16px' }}>
          <Routes>
            <Route path="/" element={<h1>Welcome! Select Users or Dishes</h1>} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<UserDetail />} />
            <Route path="/dishes" element={<DishList />} />
            <Route path="/dishes/:dishId" element={<DishDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
