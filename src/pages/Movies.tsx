import React, { useState, useEffect } from "react";
import data from "../data/data.json";

import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Main/Main";
import Medias from "../components/Movies/Medias/Medias";
import Search from "../components/Search/Search";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<any>([]);
  /*   const [search, setSearch] = useState<string>(""); */

  useEffect(() => {
    const filteredMovies = data.filter((movie) => movie.category === "Movie");
    setMovies(filteredMovies);
  }, []);

  /*   const searchMediaHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const filteredMovies = data.filter((movie) => movie.category === "Movie");
    setSearch(event.currentTarget.value);
    console.log(search);
    if (search !== "") {
      setMovies(
        filteredMovies.filter((movie: any) => movie.title.includes(search))
      );
    } else setMovies(filteredMovies);
  }; */

  return (
    <React.Fragment>
      <Header />
      <Main>
        <Search
          placeholder="Search for movies"
          medias={movies}
          /* setSearch={setSearch} */
          setMedias={setMovies}
        />
        {movies && <Medias title="Movies" medias={movies} />}
      </Main>
    </React.Fragment>
  );
};

export default Movies;
