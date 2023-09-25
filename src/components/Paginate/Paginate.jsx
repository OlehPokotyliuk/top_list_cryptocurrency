import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import classes from './Paginate.module.scss';
const { CoinsList } = require("components/CoinsList/CoinsList");

export const Paginate =  ({ itemsPerPage, items}) =>{
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={classes.paginate}>
      <CoinsList currentItems={currentItems} />
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        pageCount={10}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        activeClassName={classes.active}
      />
    </div >
  );
}