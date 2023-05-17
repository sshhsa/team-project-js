import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
const visiblePages = 3;
const paginationEl = document.querySelector('.pagination');

function getPagination(totalItems, itemsPerPage) {
  const options = {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: visiblePages,
    centerAlign: true,
    firstItemClassName: 'pagination__first-item',
    lastItemClassName: 'pagination__last-item',
    prevButtonClassName: 'pagination__prev-btn',
    nextButtonClassName: 'pagination__next-btn',
    pageLinkClassName: 'pagination__page-link',
    activePageLinkClassName: 'pagination__page-link--active',
  };

  return new Pagination(paginationEl, options);
}

export { getPagination, paginationEl };