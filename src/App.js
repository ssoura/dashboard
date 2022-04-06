import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthLayout from './components/layout/AuthLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<AuthLayout children={<Login />} />} />
      <Route
        path='/register'
        element={<AuthLayout children={<Register />} />}
      />
    </Routes>
  );
}

export default App;
