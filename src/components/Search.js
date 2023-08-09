import React from "react";

function Search({setSearchString}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={e => setSearchString(e.target.value)}
      />
    </div>
  );
}

export default Search;
