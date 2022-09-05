import React from "react";
import Home from "../../../assets/icon-nav-home.svg";
import Movie from "../../../assets/icon-nav-movies.svg";
import TV from "../../../assets/icon-nav-tv-series.svg";
import Bookmark from "../../../assets/icon-nav-bookmark.svg";
import { NavLink } from "react-router-dom";

const Navlinks: React.FC = () => {
  return (
    <div className="nav-links">
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <img src={Home} alt="Home" title="To home" />
      </NavLink>
      <NavLink
        to="/movies"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <img src={Movie} alt="Movies" title="To movies" />
      </NavLink>
      <NavLink
        to="/series"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <img src={TV} alt="TV shows" title="To TV shows" />
      </NavLink>
      <NavLink
        to="/bookmarks"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <img src={Bookmark} alt="Bookmark" title="To bookmarks" />
      </NavLink>
    </div>
  );
};

export default Navlinks;
