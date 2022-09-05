import React from "react";
import Input from "../UI/Input";

import SearchIcon from "../../assets/icon-search.svg";

interface ISearch {
  placeholder: string;
}

const Search: React.FC<ISearch> = (props) => {
  return (
    <div className="search">
      <img src={SearchIcon} alt="Search" className="search-icon" />
      <Input
        id="search"
        name="search"
        className="input search-input"
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Search;
