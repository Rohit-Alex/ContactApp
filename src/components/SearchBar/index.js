import React, { useState, useCallback } from "react";
import SearchIcon from "@material-ui/icons/Search";
import debounce from "lodash.debounce";
import "./style.css";
const Search = ({ setSearchVal }) => {
  const [inputVal, setInputVal] = useState(null);

  const debouncedSave = useCallback(
    debounce((nextVal) => setSearchVal(nextVal), 400),
    []
  );
  const handleChange = (e) => {
    const nextVal = e.target.value;
    setInputVal(nextVal);
    debouncedSave(nextVal);
  };
  return (
    <div className="searchContainer">
      <SearchIcon />
      <input
        className="inputSearch"
        type="text"
        placeholder="Search"
        value={inputVal}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
