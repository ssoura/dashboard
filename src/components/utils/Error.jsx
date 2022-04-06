const Error = ({ message }) => {
  return (
    <div
      className='w-full bg-red-100 border-l-4 border-danger text-danger p-4'
      role='alert'>
      <p className='font-bold'>Error</p>
      <p>{message}</p>
    </div>
  );
};

export default Error;
