import React from 'react';
import Dashboard from './section/Dashboard';
import Settings from './section/Settings';
import Users from './section/Users';

const Main = ({ nav }) => {
  const renderModal = () => {
    switch (nav) {
      case 0:
        return <Dashboard />;

      case 1:
        return;

      case 2:
        return;

      case 3:
        return <Users />;

      case 4:
        return <Settings />;

      default:
        return <Dashboard />;
    }
  };

  return <div className='w-4/5 pl-15'>{renderModal()}</div>;
};

export default Main;
