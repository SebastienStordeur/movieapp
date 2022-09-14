import React, { useState, useEffect } from "react";
import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Main/Main";
import Medias from "../components/Movies/Medias/Medias";
import Search from "../components/Search/Search";
import data from "../data/data.json";

const Series: React.FC = () => {
  const [series, setSeries] = useState<any>([]);
  const [searchValue, setSearchValue] = useState<string | undefined>("");

  const getSearchValue = (value: string | undefined) => {
    setSearchValue(value);
  };

  useEffect(() => {
    const filteredSeries = data.filter((serie) => serie.category === "TV Series");
    setSeries(filteredSeries);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Main>
        {/*         <Search
          placeholder="Search for TV series"
          medias={series}
          setMedias={setSeries}
          type="TV Series"
          getValue={getSearchValue}
        />
        <Medias title="TV Series" medias={series} value={searchValue} /> */}
      </Main>
    </React.Fragment>
  );
};

export default Series;
