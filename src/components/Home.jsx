import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from './home/Main';
import Sidebar from './home/Sidebar';

const Home = () => {
  let navigate = useNavigate();
  const [nav, setNav] = useState(0);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')).isLoggedIn
      : false
  );

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')).isLoggedIn
      : false;

    setLoggedIn(isLoggedIn);

    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  return loggedIn ? (
    <div className='w-full min-h-screen p-10 bg-background flex'>
      <Sidebar nav={nav} setNav={setNav} />
      <Main nav={nav} />
    </div>
  ) : null;
};

export default Home;
