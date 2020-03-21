import React from "react";

const SearchComponent = props => {
  return (
    <div>
      <label>Search Name: </label>
      <input type="text" name="search"
        onChange={(event) => props.onChangeSearchText(event.currentTarget.value)} />
    </div>
  );
};

export default SearchComponent;
