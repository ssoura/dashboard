import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className='w-full min-h-screen bg-background flex'>
      <div className='w-2/5 bg-primary flex justify-center items-center'>
        <p className='text-7xl font-bold text-white font-montserrat'>Dash.</p>
      </div>
      <div className='w-3/5 h-screen flex justify-center overflow-scroll'>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
