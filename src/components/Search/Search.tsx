import React from "react";
import Input from "../UI/Input";

import SearchIcon from "../../assets/icon-search.svg";

const Search: React.FC = () => {
  return (
    <div className="search">
      <img src={SearchIcon} alt="Search" className="search-icon" />
      <Input
        id="search"
        name="search"
        className="input search-input"
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
};

export default Search;
