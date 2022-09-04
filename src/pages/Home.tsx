import React from "react";
import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Main/Main";
import Recommended from "../components/Movies/Recommended/Recommended";
import Trending from "../components/Movies/Trending/Trending";
import Search from "../components/Search/Search";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <Search />
        <Trending />
        <Recommended />
      </Main>
    </React.Fragment>
  );
};

export default Home;
