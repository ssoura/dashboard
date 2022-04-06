import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppleIcon, GoogleIcon } from './icons/SocialIcons';

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e, mail, pw) => {
    e.preventDefault();

    if (mail === 'netclan@gmail.com' && pw === 'netclan@123') {
      const user = {
        isLoggedIn: true,
        email: mail,
      };
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    }
  };

  return (
    <div className='w-9/20 my-auto'>
      <p className='text-4xl font-montserrat font-bold'>Sign In</p>
      <p className='text-base font-lato font-normal'>Sign in to your account</p>
      <div className='w-full my-5 flex'>
        <div className='w-1/2 flex justify-start'>
          <button className='w-11/12 flex justify-center bg-white p-2 text-xs text-secondary font-montserrat rounded-xl'>
            <span className='mr-2'>
              <GoogleIcon />
            </span>
            Sign in with Google
          </button>
        </div>
        <div className='w-1/2 flex justify-end'>
          <button className='w-11/12 flex justify-center bg-white p-2 text-xs text-secondary font-montserrat rounded-xl'>
            <span className='mr-2'>
              <AppleIcon />
            </span>
            Sign in with Apple
          </button>
        </div>
      </div>
      <div className='w-full bg-white p-7 rounded-2xl'>
        <form action='#'>
          <div className='flex flex-col mb-4'>
            <label
              htmlFor='email'
              className='mb-2 text-base font-semibold font-lato'>
              Email Address
            </label>
            <input
              id='email'
              type='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-4 py-2 font-semibold font-lato bg-field rounded-lg focus:outline-none focus:bg-gray-200'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label
              htmlFor='password'
              className='mb-2 text-base font-semibold font-lato'>
              Password
            </label>

            <input
              id='password'
              type='password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-2 font-semibold font-lato bg-field rounded-lg focus:outline-none focus:bg-gray-200'
            />
          </div>

          <div className='mb-4'>
            <button className='font-lato font-medium text-link hover:text-blue-700'>
              Forgot password?
            </button>
          </div>

          <button
            type='submit'
            onClick={(e) => handleLogin(e, email, password)}
            className='w-full py-2 text-white text-base font-bold tracking-wider rounded-lg bg-primary hover:opacity-90 focus:outline-none transition duration-100 ease-in'>
            Sign In
          </button>
        </form>
      </div>
      <div className='w-full my-5 flex justify-center font-lato font-medium text-secondary'>
        Don’t have an account?
        <Link to='/register' className='ml-1 text-link hover:text-blue-700'>
          Register here
        </Link>
      </div>
    </div>
  );
};

export default Login;
