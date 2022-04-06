import { useEffect, useState } from 'react';
import Pagination from '../../utils/Pagination';
import { AddIcon, FilterIcon } from '../../icons/ButtonIcons';
import SearchIcon from '../../icons/SearchIcon';
import Topbar from '../../utils/Topbar';
import Loader from '../../icons/Loader';
import User from '../../utils/User';
import Error from '../../utils/Error';

const url = 'https://randomuser.me/api/?results=40';

const Users = () => {
  const [data, setData] = useState([]);
  const [dataset, setDataset] = useState([]);
  const [error, setError] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [filter, setFilter] = useState('');

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
            name: row.name.first + ' ' + row.name.last,
            email: row.email,
            gender: row.gender,
            country: row.location.country,
            image: row.picture.thumbnail,
          };
        });
        setDataset(rows);
        setData(rows);
      })
      .catch((err) => setError(err.message));
  }, []);

  const handleFilter = (value) => {
    if (value !== filter) {
      const rows = dataset.filter((x) => x.gender === value);
      setData(rows);
      setFilter(value);
    } else {
      setData(dataset);
      setFilter('');
    }
  };

  return (
    <>
      <Topbar header={'Users'} />
      <div className='my-10 px-12 py-10 bg-white rounded-2xl'>
        <div className='flex justify-between mb-3'>
          <p className='text-lg font-bold font-montserrat'>User Records</p>
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
                placeholder='Search in table...'
                className='w-full px-4 py-1 font-medium font-lato bg-background rounded-lg focus:outline-none'
              />
            </div>
            <div className='relative'>
              <button
                className='mx-2.5 px-3 py-1 flex items-center border border-light-grey rounded-md'
                onClick={() => setShowMenu(!showMenu)}>
                <FilterIcon />
                <span className='ml-2 text-light-grey text-sm font-montserrat font-bold'>
                  Filter
                </span>
              </button>

              {showMenu ? (
                <div className='absolute w-full right-0 mt-2 font-montserrat text-sm text-white bg-primary rounded-md shadow-lg overflow-hidden z-20'>
                  <div className='py-2'>
                    <button
                      className={`w-full flex items-center px-4 py-3 border-l-4 tracking-wider ${
                        filter === 'female'
                          ? 'font-bold border-white'
                          : 'font-medium border-primary'
                      }`}
                      onClick={() => handleFilter('female')}>
                      female
                    </button>
                    <button
                      className={`w-full flex items-center px-4 py-3 border-l-4 tracking-wider ${
                        filter === 'male'
                          ? 'font-bold  border-white'
                          : 'font-medium border-primary'
                      }`}
                      onClick={() => handleFilter('male')}>
                      male
                    </button>
                  </div>
                </div>
              ) : null}
            </div>

            <button className='ml-2.5 px-3 py-1 flex items-center bg-primary rounded-md'>
              <AddIcon />
              <span className='ml-2 text-white text-sm font-montserrat font-bold'>
                Add
              </span>
            </button>
          </div>
        </div>
        <div className='mt-6'>
          {error ? (
            <Error message={error} />
          ) : (
            <>
              {data.length > 0 ? (
                <>
                  <Pagination
                    data={data}
                    RenderComponent={User}
                    pageLimit={
                      Math.ceil(data.length / 10) < 4
                        ? Math.ceil(data.length / 10)
                        : 4
                    }
                    dataLimit={10}
                  />
                </>
              ) : (
                <div className='w-full flex justify-center'>
                  <Loader color={'text-primary'} />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Users;
