export const ProfileIcon = ({ url }) => {
  return (
    <div className='rounded-full overflow-hidden h-7 w-7'>
      <img src={url} alt='' className='w-full h-full' />
    </div>
  );
};
