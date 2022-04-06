import React, { useState } from 'react';
import { AppleIcon, GoogleIcon } from './icons/SocialIcons';
import { EyeIcon, EyeOffIcon } from './icons/EyeIcons';
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(true);

  return (
    <div className='w-9/20 my-10'>
      <p className='text-4xl font-montserrat font-bold'>Create an account</p>
      <p className='text-base font-lato font-normal'>
        Create an account to use dashboard
      </p>
      <div className='w-full my-5 flex'>
        <div className='w-1/2 flex justify-start'>
          <button className='w-11/12 flex justify-center bg-white p-2 text-xs text-secondary font-montserrat rounded-xl'>
            <span className='mr-2'>
              <GoogleIcon />
            </span>
            Sign up with Google
          </button>
        </div>
        <div className='w-1/2 flex justify-end'>
          <button className='w-11/12 flex justify-center bg-white p-2 text-xs text-secondary font-montserrat rounded-xl'>
            <span className='mr-2'>
              <AppleIcon />
            </span>
            Sign up with Apple
          </button>
        </div>
      </div>
      <div className='w-full bg-white p-7 rounded-2xl'>
        <form action='#'>
          <div className='flex mb-4'>
            <div className='w-1/2 flex justify-start'>
              <div className='w-11/12'>
                <label
                  htmlFor='first-name'
                  className='text-base font-semibold font-lato'>
                  First Name
                </label>
                <input
                  id='first-name'
                  type='first-name'
                  name='first-name'
                  className='w-full mt-2 px-4 py-2 font-semibold font-lato bg-field rounded-lg focus:outline-none focus:bg-gray-200'
                />
              </div>
            </div>
            <div className='w-1/2 flex justify-end'>
              <div className='w-11/12'>
                <label
                  htmlFor='last-name'
                  className='text-base font-semibold font-lato'>
                  Last Name
                </label>
                <input
                  id='last-name'
                  type='last-name'
                  name='last-name'
                  className='w-full mt-2 px-4 py-2 font-semibold font-lato bg-field rounded-lg focus:outline-none focus:bg-gray-200'
                />
              </div>
            </div>
          </div>
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
              className='w-full px-4 py-2 font-semibold font-lato bg-field rounded-lg focus:outline-none focus:bg-gray-200'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label
              htmlFor='password'
              className='mb-2 text-base font-semibold font-lato'>
              Password
            </label>

            <div className='relative'>
              <div
                className='inline-flex items-center justify-center absolute right-0 top-0 h-full w-10 text-gray-400 cursor-pointer'
                onClick={() => setShowPassword1(!showPassword1)}>
                <span>{showPassword1 ? <EyeOffIcon /> : <EyeIcon />}</span>
              </div>
              <input
                id='password'
                type={showPassword1 ? 'text' : 'password'}
                name='password'
                className='w-full px-4 py-2 font-semibold font-lato bg-field rounded-lg focus:outline-none focus:bg-gray-200'
              />
            </div>
          </div>

          <div className='flex flex-col mb-4'>
            <label
              htmlFor='password'
              className='mb-2 text-base font-semibold font-lato'>
              Confirm Password
            </label>

            <div className='relative'>
              <div
                className='inline-flex items-center justify-center absolute right-0 top-0 h-full w-10 text-gray-400 cursor-pointer'
                onClick={() => setShowPassword2(!showPassword2)}>
                <span>{showPassword2 ? <EyeOffIcon /> : <EyeIcon />}</span>
              </div>
              <input
                id='confirm-password'
                type={showPassword2 ? 'text' : 'password'}
                name='confirm-password'
                className='w-full px-4 py-2 font-semibold font-lato bg-field rounded-lg focus:outline-none focus:bg-gray-200'
              />
            </div>
          </div>

          <div className='mb-4'>
            <label class='inline-flex items-center mt-3'>
              <input type='checkbox' className='h-4 w-4 checked:bg-primary' />
              <span class='ml-2 text-gray-700'>
                I agree the
                <button className='ml-1 text-link hover:text-blue-700'>
                  terms and conditions
                </button>
              </span>
            </label>
          </div>

          <button
            type='submit'
            className='w-full py-2 text-white text-base font-bold tracking-wider rounded-lg bg-primary hover:opacity-90 focus:outline-none transition duration-100 ease-in'>
            Sign Up
          </button>
        </form>
      </div>
      <div className='w-full my-5 flex justify-center font-lato font-medium text-secondary'>
        Already have an account?
        <Link to='/login' className='ml-1 text-link hover:text-blue-700'>
          Sign in here
        </Link>
      </div>
    </div>
  );
};

export default Register;
