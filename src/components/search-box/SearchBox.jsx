import React from "react";
import "./searchbox.css";

const SearchBox = (props) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={props.placeholder}
      onChange={props.onSearch}
    />
  );
};

export default SearchBox;
