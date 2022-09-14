import React, { useState, useEffect } from "react";
import data from "../data/data.json";

import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Main/Main";
import Medias from "../components/Movies/Medias/Medias";
import Search from "../components/Search/Search";
import Input from "../components/UI/Input";

export type NotTrendingMovie = {
  title: string;
  thumbnail: {
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
};

const Movies: React.FC = () => {
  const [movies, setMovies] = useState</* NotTrendingMovie[] */ any>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const getSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  console.log(searchValue);

  /*   useEffect(() => {
    const filteredMovies: NotTrendingMovie[] = data.filter((movie) => movie.category === "Movie");
    setMovies(filteredMovies);
  }, []); */

  return (
    <React.Fragment>
      <Header />
      <Main>
        <Search placeholder="Search for movies" value={searchValue} onChange={setSearchValue} />
        {/* {movies && <Medias title="Movies" medias={movies} value={searchValue} />} */}
      </Main>
    </React.Fragment>
  );
};

export default Movies;
