import React, { useState, useEffect } from "react";
import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Main/Main";
import Medias from "../components/Movies/Medias/Medias";
import Trending from "../components/Movies/Trending/Trending";
import Search from "../components/Search/Search";

import data from "../data/data.json";
import { NotTrendingMovie } from "./Movies";

const Home: React.FC = () => {
  const [medias, setMedias] = useState<NotTrendingMovie[]>([]);

  useEffect(() => {
    setMedias(data.slice(5, data.length));
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Main>
        <Search placeholder="Search for movies or TV series" medias={medias} setMedias={setMedias} type="All" />
        <Trending />
        <Medias title="Recommended for you" medias={medias} /* setMedias={setMedias} */ />
      </Main>
    </React.Fragment>
  );
};

export default Home;
