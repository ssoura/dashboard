import React, { useEffect, useState } from 'react';
import {
  LikesIcon,
  RevenuesIcon,
  TransactionIcon,
  UsersIcon,
} from '../../icons/CardIcons';
import DropdownIcon from '../../icons/DropdownIcon';
import LineChart from '../../utils/LineChart';
import Error from '../../utils/Error';
import Topbar from '../../utils/Topbar';
import PieChart from '../../utils/PieChart';

// const url = 'https://randomuser.me/api/?results=40';
const url = '../../../data/jsondata.json'

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting data');
      })
      .then((res) => {
        const rows = res.results.map((row, index) => {
          return {
            index,
            gender: row.gender,
            age: row.dob.age,
          };
        });
        setData(rows);
      })
      .catch((err) => setError(err.message));
  }, []);

  const maleData = {
    name: 'Male',
    color: '#9BDD7C',
    items: data.filter((x) => x.gender === 'male'),
  };

  const femaleData = {
    name: 'Female',
    color: '#E9A0A0',
    items: data.filter((x) => x.gender === 'female'),
  };

  const dimensions = {
    width: 780,
    height: 300,
    margin: {
      top: 30,
      right: 30,
      bottom: 30,
      left: 60,
    },
  };

  const pieData = [
    { label: 'Basic Tees', value: 55 },
    { label: 'Custom Short Pants', value: 31 },
    { label: 'Super Hoodies', value: 14 },
  ];

  return (
    <>
      <Topbar header={'Dashboard'} />
      <div className='my-10 grid grid-cols-4 gap-10'>
        <div className='px-6 py-5 bg-card-1 rounded-2xl'>
          <div className='flex justify-end text-black'>
            <RevenuesIcon />
          </div>
          <div className='text-sm font-lato font-normal'>Total Revenues</div>
          <div className='py-1 text-2xl font-sans font-bold'>$2,129,430</div>
        </div>
        <div className='px-6 py-5 bg-card-2 rounded-2xl'>
          <div className='flex justify-end text-black'>
            <TransactionIcon />
          </div>
          <div className='text-sm font-lato font-normal'>
            Total Transactions
          </div>
          <div className='py-1 text-2xl font-sans font-bold'>1,520</div>
        </div>
        <div className='px-6 py-5 bg-card-3 rounded-2xl'>
          <div className='flex justify-end text-black'>
            <LikesIcon />
          </div>
          <div className='text-sm font-lato font-normal'>Total Likes</div>
          <div className='py-1 text-2xl font-sans font-bold'>9,721</div>
        </div>
        <div className='px-6 py-5 bg-card-4 rounded-2xl'>
          <div className='flex justify-end text-black'>
            <UsersIcon />
          </div>
          <div className='text-sm font-lato font-normal'>Total Users</div>
          <div className='py-1 text-2xl font-sans font-bold'>892</div>
        </div>
      </div>
      <div className='w-full py-7 px-10 bg-white rounded-2xl'>
        <p className='text-lg font-bold font-montserrat'>Activities</p>
        <div className='mt-2 flex justify-between'>
          <button className='font-montserrat text-xs text-secondary font-normal flex items-center'>
            May - June 2021
            <span className='ml-2'>
              <DropdownIcon />
            </span>
          </button>
          <div className='flex items-center'>
            <div className='flex justify-center items-center w-20'>
              <span className='w-2 h-2 rounded-full bg-light-green'></span>
              <p className='font-lato text-sm ml-2'>Male</p>
            </div>
            <div className='flex justify-center items-center w-20'>
              <span className='w-2 h-2 rounded-full bg-light-red'></span>
              <p className='font-lato text-sm ml-2'>Female</p>
            </div>
          </div>
        </div>
        <div className='w-full mt-6 flex justify-center items-center'>
          {error ? (
            <Error message={error} />
          ) : (
            <LineChart data={[maleData, femaleData]} dimensions={dimensions} />
          )}
        </div>
      </div>
      <div className='mt-10 grid grid-cols-2 gap-10'>
        <div className='w-full py-7 px-10 bg-white rounded-2xl'>
          <div className='flex justify-between'>
            <p className='text-lg font-bold font-montserrat'>Top products</p>
            <button className='font-montserrat text-xs text-secondary font-normal flex items-center'>
              May - June 2021
              <span className='ml-2'>
                <DropdownIcon />
              </span>
            </button>
          </div>
          <div className='mt-3 flex justify-center items-center'>
            <div className='w-1/2 flex justify-center items-center'>
              <PieChart data={pieData} outerRadius={60} innerRadius={0} />
            </div>
            <div className='w-1/2'>
              <div className='my-4 w-full flex items-start'>
                <span className='my-1 w-2 h-2 rounded-full bg-legend-1'></span>
                <div className='ml-2'>
                  <p className='font-lato text-sm font-bold'>Basic Tees</p>
                  <p className='font-lato text-xs text-secondary'>55%</p>
                </div>
              </div>
              <div className='my-4 w-full flex items-start'>
                <span className='my-1 w-2 h-2 rounded-full bg-legend-2'></span>
                <div className='ml-2'>
                  <p className='font-lato text-sm font-bold'>
                    Custom Short Pants
                  </p>
                  <p className='font-lato text-xs text-secondary'>31%</p>
                </div>
              </div>
              <div className='my-4 w-full flex items-start'>
                <span className='my-1 w-2 h-2 rounded-full bg-legend-3'></span>
                <div className='ml-2'>
                  <p className='font-lato text-sm font-bold'>Super Hoodies</p>
                  <p className='font-lato text-xs text-secondary'>14%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full py-7 px-10 bg-white rounded-2xl'>
          <div className='flex justify-between mb-3'>
            <p className='text-lg font-bold font-montserrat'>
              Today’s schedule
            </p>
            <button className='font-montserrat text-xs text-secondary font-normal'>
              See All
            </button>
          </div>
          <div className='my-3 px-3.5 border-l-4 border-light-green'>
            <p className='my-1 text-sm font-lato font-bold text-dark-gray'>
              Meeting with suppliers from Kuta Bali
            </p>
            <p className='my-1 text-xs font-lato font-normal text-dark-gray'>
              14.00-15.00
            </p>
            <p className='my-1 text-xs font-lato font-normal text-dark-gray'>
              at Sunset Road, Kuta, Bali
            </p>
          </div>
          <div className='my-3 px-3.5 border-l-4 border-light-blue'>
            <p className='my-1 text-sm font-lato font-bold text-dark-gray'>
              Check operation at Giga Factory 1
            </p>
            <p className='my-1 text-xs font-lato font-normal text-dark-gray'>
              18.00-20.00
            </p>
            <p className='my-1 text-xs font-lato font-normal text-dark-gray'>
              at Central Jakarta
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
