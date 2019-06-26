import React from 'react';

/* 
**form and method for returning sorting value to sort handler
*/
export default function SortCards ({ handleChangeSort, orderBy }) {
  return (
    <label htmlFor="order-by">
      Sort by: {" "}
      <select id="order-by" value={orderBy} onChange={handleChangeSort}>
      <option value="name">Card name</option>
      <option value="artist">Artist</option>
      <option value="set">Set</option>
      </select>
    </label>
  );
};
