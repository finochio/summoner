import React from 'react';
 
/* 
**form and method for returning value of search input to the search handler  and submit method
*/ 
export default function SearchCards ({ handleSearchInput, handleSearchSubmit, searchText }) {
  return (
    <form onSubmit={handleSearchSubmit}>
    <label htmlFor="search">
        Card Name Search:{" "}
        <input id="search" name="search" type="text" value={searchText} onChange={handleSearchInput} />
      </label>
      {""}
      <button type="submit">Search</button>
    </form>
  );
};