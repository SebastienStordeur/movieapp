import React, { useState, useEffect } from "react";
import data from "../data/data.json";

import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Main/Main";
import Medias from "../components/Movies/Medias/Medias";
import Search from "../components/Search/Search";

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
        <Search
          placeholder="Search for movies"
          medias={movies}
          setMedias={setMovies}
          type="Movie"
        />
        {movies && <Medias title="Movies" medias={movies} />}
      </Main>
    </React.Fragment>
  );
};

export default Movies;
