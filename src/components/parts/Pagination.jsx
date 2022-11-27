import React from "react";

const Pagination = ({ newsPerPage, totalNews, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="categorypage-content-list-pagination">
      {pageNumbers.map((number) => {
        return (
          <div
            className="categorypage-content-list-pagination-item"
            key={number}
          >
            <button
              className="categorypage-content-list-pagination-item-btn"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
