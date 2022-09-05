import React from "react";
import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Main/Main";
import Medias from "../components/Movies/Medias/Medias";
import Search from "../components/Search/Search";

const Movies: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <Search placeholder="Search for movies" />
        <Medias title="Movies" />
      </Main>
    </React.Fragment>
  );
};

export default Movies;
