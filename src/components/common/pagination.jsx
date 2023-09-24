import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

// class Pagination extends Component {
//   state = {};
//   render() {
//     return (
//       <nav aria-label="Page navigation example">
//         <ul class="pagination">
//           <li class="page-item">
//             <a class="page-link" href="#" aria-label="Prev">
//               <span aria-hidden="true">&laquo;</span>
//               <span class="sr-only">Previous</span>
//             </a>
//           </li>
//           <li class="page-item">
//             <a class="page-link" href="#">
//               1
//             </a>
//           </li>
//           <li class="page-item">
//             <a class="page-link" href="#">
//               2
//             </a>
//           </li>
//           <li class="page-item">
//             <a class="page-link" href="#">
//               3
//             </a>
//           </li>
//           <li class="page-item">
//             <a class="page-link" href="#" aria-label="Next">
//               <span aria-hidden="true">&raquo;</span>
//               <span class="sr-only">Next</span>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Pagination;
