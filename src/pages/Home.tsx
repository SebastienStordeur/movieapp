import React from "react";
import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Main/Main";
import Medias from "../components/Movies/Medias/Medias";
import Trending from "../components/Movies/Trending/Trending";
import Search from "../components/Search/Search";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        {/* <Search placeholder="Search for movies or TV series" /> */}
        <Trending />
        <Medias title="Recommended for you" />
      </Main>
    </React.Fragment>
  );
};

export default Home;
