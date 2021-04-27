import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./style.css";
const Search = () => {
  const [inputVal, setInputVal] = useState(null);
  return (
    <div className="searchContainer">
      <SearchIcon />
      <input
        className="inputSearch"
        type="text"
        placeholder="Search"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </div>
  );
};

export default Search;
