import React from "react";
import { HashLink } from "react-router-hash-link";

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
            <HashLink to="#categorypage-title" smooth>
              <button
                className="categorypage-content-list-pagination-item-btn"
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </HashLink>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
