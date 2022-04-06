import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BellIcon from '../icons/BellIcon';
import Profile from '../assets/profile.png';
import { ProfileIcon } from '../icons/ProfileIcon';
import SearchIcon from '../icons/SearchIcon';

const Topbar = ({ header }) => {
  let navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const signOut = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className='pt-5 flex justify-between items-center'>
      <p className='text-2xl font-bold font-montserrat'>{header}</p>
      <div className='flex'>
        <div className='relative mx-2.5'>
          <div className='inline-flex items-center justify-center absolute right-0 top-0 h-full w-10 text-gray-400'>
            <span>
              <SearchIcon />
            </span>
          </div>
          <input
            id='search'
            type='text'
            name='search'
            placeholder='Search...'
            className='w-full px-4 py-1 font-medium font-lato bg-white rounded-lg focus:outline-none'
          />
        </div>
        <button className='mx-2.5 p-1.5'>
          <BellIcon />
        </button>
        <div className='relative'>
          <button className='ml-2.5' onClick={() => setShowMenu(!showMenu)}>
            <ProfileIcon url={Profile} />
          </button>

          {showMenu ? (
            <div className='absolute right-0 mt-2 font-montserrat text-sm text-secondary bg-field rounded-md shadow-lg overflow-visible z-20'>
              <div className='py-2'>
                <button
                  onClick={() => signOut()}
                  className='w-28 flex items-center px-4 py-3 border-l-4 tracking-wider hover:font-bold'>
                  Sign out
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
