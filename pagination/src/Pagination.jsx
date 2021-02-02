import React from 'react';

const Pagination = ({goPrev, goNext, currentPage, totalItems, itemsPerPage}) => {
  let isPrevPageAvailable = currentPage > 1;
  let isNextPageAvailable = currentPage < Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>{
        isPrevPageAvailable && '←'
      }</button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>{
        isNextPageAvailable && '→'
      }</button>
    </div>
  );
};

export default Pagination;
