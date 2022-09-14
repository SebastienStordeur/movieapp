import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import Input from "../UI/Input";

import SearchIcon from "../../assets/icon-search.svg";

interface ISearch {
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
}

const Search: React.FC<ISearch> = (props) => {
  console.log("props", props);
  const searchValueRef = useRef<any>("");
  /*   const [searchValue, setSearchValue] = useState<string>("");
  console.log(searchValue);

  props.onChange(searchValue);

  const filter = data.filter((movie) => movie.title.includes(searchValue));
  console.log(filter); */

  return (
    <div className="search">
      <img src={SearchIcon} alt="Search" className="search-icon" />

      <Input
        id="search"
        name="search"
        className="input search-input"
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value)}
        ref={searchValueRef}
      />
    </div>
  );
};

export default Search;
