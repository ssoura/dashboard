import { ProfileIcon } from '../icons/ProfileIcon';

const User = (props) => {
  const { index, name, email, gender, country, image } = props.data;

  return (
    <div
      className={`w-full px-8 py-4 grid grid-cols-12 gap-4 items-center rounded-lg font-lato text-sm font-semibold ${
        index % 2 === 0 ? 'bg-light-gray' : 'bg-background'
      }`}>
      <div className='col-span-1 text-center'>
        <ProfileIcon url={image} />
      </div>
      <div className='col-span-3'>{name}</div>
      <div className='col-span-4'>{email}</div>
      <div className='col-span-2'>{gender}</div>
      <div className='col-span-2'>{country}</div>
    </div>
  );
};

export default User;
