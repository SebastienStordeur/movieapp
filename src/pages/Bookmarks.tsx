import React from "react";
import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Main/Main";
import Medias from "../components/Movies/Medias/Medias";
import Search from "../components/Search/Search";

const Bookmarks: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        {/* <Search placeholder="Search for bookmarked shows" /> */}
        <Medias title="Bookmarked Movies" />
      </Main>
    </React.Fragment>
  );
};

export default Bookmarks;
