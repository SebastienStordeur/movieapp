import React, { Dispatch, SetStateAction, useRef } from "react";
import Input from "../UI/Input";

import SearchIcon from "../../assets/icon-search.svg";
import data from "../../data/data.json";

interface ISearch {
  placeholder: string;
  medias: {
    title: string;
    thumbnail: {
      trending: {
        small: string;
        large: string;
      };
      regular: {
        small: string;
        medium: string;
        large: string;
      };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
  }[];
  setMedias?: Dispatch<SetStateAction<any>> | any;
  type?: string;
}

const Search: React.FC<ISearch> = (props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const filterMediaHandler = () => {
    if (props.type !== "All") {
      props.setMedias(
        data.filter(
          (media: any) =>
            media.title.includes(searchRef.current?.value) &&
            media.category === props.type
        )
      );
    } else {
      props.setMedias(
        data.filter((media: any) =>
          media.title.includes(searchRef.current?.value)
        )
      );
    }
  };

  return (
    <div className="search">
      <img src={SearchIcon} alt="Search" className="search-icon" />
      <Input
        id="search"
        name="search"
        className="input search-input"
        type="text"
        placeholder={props.placeholder}
        onChange={filterMediaHandler}
        ref={searchRef}
      />
    </div>
  );
};

export default Search;
