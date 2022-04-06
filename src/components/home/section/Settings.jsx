import CalenderIcon from '../../icons/CalenderIcon';
import { EyeIcon, EyeOffIcon } from '../../icons/EyeIcons';
import Topbar from '../../utils/Topbar';
import Profile from '../../assets/profile.png';
import { useState } from 'react';

const Settings = () => {
  const [toggle, setToggle] = useState(true);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(true);

  const user = {
    firstName: 'Surya',
    lastName: 'Wiguna',
    email: 'suryawigunaa@gmail.com',
    password: '12345678',
    birthDate: '28 February 1996',
    phone: '+1283716291',
    address: '323 Fifth Ave. Canandaigua, NY',
  };

  return (
    <>
      <Topbar header={'Settings'} />
      <div class='my-10 grid grid-cols-9 grid-flow-col gap-10'>
        <div class='col-span-5'>
          <div className='py-7 px-10 bg-white rounded-2xl'>
            <p className='text-lg font-bold font-montserrat'>Profile</p>
            <div className='mt-6 grid grid-cols-7 grid-flow-col gap-10'>
              <div className='col-span-2 text-center'>
                <div className='w-full rounded-full overflow-hidden'>
                  <img
                    className='w-full object-contain'
                    alt='profile img'
                    src={Profile}
                  />
                </div>
                <button className='my-4 text-xs px-2 py-1 font-montserrat text-secondary border border-secondary rounded-md font-bold'>
                  Change
                </button>
              </div>
              <div className='col-span-5'>
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
                          defaultValue={user.firstName}
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
                          defaultValue={user.lastName}
                          className='w-full mt-2 px-4 py-2 font-semibold font-lato bg-field rounded-lg focus:outline-none focus:bg-gray-200'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <label
                      htmlFor='dob'
                      className='mb-2 text-base font-semibold font-lato'>
                      Date of Birth
                    </label>

                    <div className='relative'>
                      <div className='inline-flex items-center justify-center absolute right-0 top-0 h-full w-10 text-gray-400'>
                        <span>
                          <CalenderIcon />
                        </span>
                      </div>
                      <input
                        id='dob'
                        type='text'
                        name='dob'
                        defaultValue={user.birthDate}
                        className='w-full px-4 py-2 font-semibold font-lato bg-field rounded-lg focus:outline-none focus:bg-gray-200'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col mb-4'>
                    <label
                      htmlFor='phone'
                      className='mb-2 text-base font-semibold font-lato'>
                      Phone Number
                    </label>
                    <input
                      id='phone'
                      type='text'
                      name='phone'
                      defaultValue={user.phone}
                      className='w-full px-4 py-2 font-semibold font-lato bg-field rounded-lg focus:outline-none focus:bg-gray-200'
                    />
                  </div>
                  <div className='flex flex-col mb-6'>
                    <label
                      htmlFor='address'
                      className='mb-2 text-base font-semibold font-lato'>
                      Address
                    </label>
                    <input
                      id='address'
                      type='text'
                      name='address'
                      defaultValue={user.address}
                      className='w-full px-4 py-2 font-semibold font-lato bg-field rounded-lg focus:outline-none focus:bg-gray-200'
                    />
                  </div>

                  <div className='flex justify-end'>
                    <button
                      type='submit'
                      className='px-9 py-2 text-white text-base font-bold tracking-wider rounded-lg bg-save hover:opacity-90 focus:outline-none transition duration-100 ease-in'>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class='col-span-4'>
          <div className='py-7 px-10 bg-white rounded-2xl'>
            <p className='text-lg font-bold font-montserrat'>Account</p>
            <form action='#' className='mt-6'>
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
                  defaultValue={user.email}
                  className='w-full px-4 py-2 font-semibold font-lato bg-field rounded-lg focus:outline-none focus:bg-gray-200'
                />
              </div>
              <div className='flex flex-col mb-4'>
                <label
                  htmlFor='password'
                  className='mb-2 text-base font-semibold font-lato'>
                  Current Password
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
                    defaultValue={user.password}
                    className='w-full px-4 py-2 font-semibold font-lato bg-field rounded-lg focus:outline-none focus:bg-gray-200'
                  />
                </div>
              </div>

              <div className='flex flex-col mb-6'>
                <label
                  htmlFor='password'
                  className='mb-2 text-base font-semibold font-lato'>
                  New Password
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

              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='px-9 py-2 text-white text-base font-bold tracking-wider rounded-lg bg-save hover:opacity-90 focus:outline-none transition duration-100 ease-in'>
                  Save
                </button>
              </div>
            </form>
          </div>
          <div className='py-7 px-10 my-10 bg-white rounded-2xl'>
            <p className='text-lg font-bold font-montserrat'>Security</p>
            <div className='mt-6 flex justify-between items-center'>
              <p className='font-lato'>2-Step Verification</p>
              <div
                className='relative cursor-pointer'
                onClick={() => setToggle(!toggle)}>
                <div
                  className={`block w-10 h-5 rounded-full transition duration-100 ease-in ${
                    toggle ? 'bg-success' : 'bg-field'
                  }`}></div>
                <div
                  className={`absolute top-1 bg-white w-3 h-3 rounded-full transition duration-100 ease-in ${
                    toggle ? 'right-1' : 'left-1'
                  }`}></div>
              </div>
            </div>
          </div>
          <div className='py-7 px-10 bg-white rounded-2xl'>
            <p className='text-lg font-bold font-montserrat text-danger'>
              Danger Zone
            </p>
            <button className='w-full mt-6 px-9 py-2 font-montserrat text-danger text-base font-bold border-2 border-danger tracking-wider rounded-lg focus:outline-none'>
              Delete My Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
