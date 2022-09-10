import React, { useState, useEffect } from "react";
import data from "../data/data.json";

import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Main/Main";
import Medias from "../components/Movies/Medias/Medias";
import Search from "../components/Search/Search";

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
  const [movies, setMovies] = useState<NotTrendingMovie[]>([]);
  const [searchValue, setSearchValue] = useState<string | undefined>("");

  const getSearchValue = (value: string | undefined) => {
    setSearchValue(value);
  };

  useEffect(() => {
    const filteredMovies: NotTrendingMovie[] = data.filter((movie) => movie.category === "Movie");
    setMovies(filteredMovies);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Main>
        <Search
          placeholder="Search for movies"
          medias={movies}
          setMedias={setMovies}
          type="Movie"
          getValue={getSearchValue}
        />
        {movies && <Medias title="Movies" medias={movies} value={searchValue} />}
      </Main>
    </React.Fragment>
  );
};

export default Movies;
