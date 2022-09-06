import React, { useState, useEffect } from "react";
import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Main/Main";
import Medias from "../components/Movies/Medias/Medias";
import { Movie } from "../components/Movies/Trending/Trending";
import Search from "../components/Search/Search";
import data from "../data/data.json";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    const filteredMovies = data.filter((movie) => movie.category === "Movie");
    setMovies(filteredMovies);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Main>
        <Search placeholder="Search for movies" />
        {movies && <Medias title="Movies" medias={movies} />}
      </Main>
    </React.Fragment>
  );
};

export default Movies;
