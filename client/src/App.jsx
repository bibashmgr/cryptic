import React from 'react';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// scss
import './App.scss';

// pages
import Home from './pages/Home';
import Share from './pages/Share';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const loginUser = localStorage.getItem('loginUser');
    loginUser ? setIsAuth(true) : setIsAuth(false);
  }, []);

  return (
    <Router>
      <Routes>
        {!isAuth && (
          <>
            <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
            <Route path='/register' element={<Register />} />
          </>
        )}

        {isAuth && (
          <>
            <Route exact path='/' element={<Home setIsAuth={setIsAuth} />} />
            <Route path='/share' element={<Share setIsAuth={setIsAuth} />} />
            <Route
              path='/profile'
              element={<Profile setIsAuth={setIsAuth} />}
            />
          </>
        )}
        <Route path='*' element={<Navigate to={isAuth ? '/' : '/login'} />} />
      </Routes>
    </Router>
  );
};

export default App;
