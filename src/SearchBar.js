import React from "react";

function SearchBar(props) {
  return (
    <div>
      <form onSubmit={props.handleSearch}>
        <input type="text" placeholder="Haber Ara..." name="search" />
        <button type="submit">Ara</button>
      </form>
    </div>
  );
}

export default SearchBar;
