import React from "react";

function Pagination(props) {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(props.totalArticles / props.articlesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  

  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => props.paginate(number)}
              href="!#"
              className={props.currentPage === number ? "active" : ""}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
