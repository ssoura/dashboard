import React from 'react';
import {
  DashboardIcon,
  ScheduleIcon,
  SettingIcon,
  TransactionIcon,
  UsersIcon,
} from '../icons/HomeIcons';

const Sidebar = ({ nav, setNav }) => {
  return (
    <div className='w-1/5 bg-primary px-10 py-15 rounded-4xl flex flex-col'>
      <p className='text-4xl font-bold text-white font-montserrat'>Dash.</p>
      <div className='flex flex-col justify-between flex-1 mt-5'>
        <nav>
          <span
            className={`my-5 flex items-center text-white text-lg font-montserrat cursor-pointer ${
              nav === 0 ? 'font-bold' : 'font-normal'
            }`}
            onClick={() => setNav(0)}>
            <DashboardIcon />
            <span className='ml-5'>Dashboard</span>
          </span>
          <span className='my-5 flex items-center text-white text-lg font-montserrat cursor-default'>
            <TransactionIcon />
            <span className='ml-5'>Transactions</span>
          </span>
          <span className='my-5 flex items-center text-white text-lg font-montserrat cursor-default'>
            <ScheduleIcon />
            <span className='ml-5'>Schedules</span>
          </span>
          <span
            className={`my-5 flex items-center text-white text-lg font-montserrat cursor-pointer ${
              nav === 3 ? 'font-bold' : 'font-normal'
            }`}
            onClick={() => setNav(3)}>
            <UsersIcon />
            <span className='ml-5'>Users</span>
          </span>
          <span
            className={`my-5 flex items-center text-white text-lg font-montserrat cursor-pointer ${
              nav === 4 ? 'font-bold' : 'font-normal'
            }`}
            onClick={() => setNav(4)}>
            <SettingIcon />
            <span className='ml-5'>Settings</span>
          </span>
        </nav>
      </div>
      <div className='flex flex-col mt-10'>
        <span className='my-1 text-sm text-white font-montserrat cursor-default'>
          Help
        </span>
        <span className='my-1 text-sm text-white font-montserrat cursor-default'>
          Contact Us
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
