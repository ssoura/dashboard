import { useState } from 'react';
import { NextIcon, PreviousIcon } from '../icons/DirectionIcons';

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) => {
  const [pages] = useState(
    Math.round(data.length / (dataLimit > pageLimit ? dataLimit : pageLimit))
  );
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      <div className='w-full grid gap-8'>
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>

      <div className='mt-6 flex justify-end items-center'>
        <button
          onClick={goToPreviousPage}
          className={`w-7 h-7 mr-1 flex justify-center items-center border border-field rounded-lg ${
            currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}>
          <PreviousIcon />
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`w-7 h-7 mx-1 flex justify-center items-center text-sm text-secondary font-lato font-semibold  border border-field rounded-lg ${
              currentPage === item ? 'bg-field' : null
            }`}>
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={goToNextPage}
          className={`w-7 h-7 ml-1 flex justify-center items-center border border-field rounded-lg ${
            currentPage === pages ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}>
          <NextIcon />
        </button>
      </div>
    </>
  );
};

export default Pagination;
