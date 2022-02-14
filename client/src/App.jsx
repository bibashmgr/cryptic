import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// scss
import './App.scss';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
