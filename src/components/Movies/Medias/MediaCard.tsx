import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

import { getAuth } from "firebase/auth";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

import { IMovie } from "../Trending/TrendingMovie";
import MovieIcn from "../../../assets/icon-category-movie.svg";
import Bookmark from "../../../assets/icon-bookmark-empty.svg";
import Bookmarked from "../../../assets/icon-bookmark-full.svg";

const MediaCard: React.FC<IMovie> = (props) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const auth = getAuth();

  const addMovieToBookmarkHandler = async () => {
    if (auth.currentUser != null) {
      const userDoc = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userDoc, {
        bookmarks: arrayUnion(props.movie),
      });
      console.log("ok");
    }
  };

  return (
    <article className="recommended-movie">
      {isAuthenticated && (
        <button className="bookmark">
          <img
            src={Bookmark}
            alt="Bookmark this media"
            onClick={addMovieToBookmarkHandler}
          />
        </button>
      )}
      <div className="image-movie">
        <picture>
          <source
            srcSet={props.movie.thumbnail.regular.large}
            media="(min-width:1024px)"
          />
          <source
            srcSet={props.movie.thumbnail.regular.medium}
            media="(min-width:768px)"
          />
          <img
            src={props.movie.thumbnail.regular.small}
            alt={props.movie.title}
          />
        </picture>
      </div>
      <div className="movie-infos">
        <div className="secondary-infos">
          <span>{props.movie.year}</span>
          <div className="dot"></div>
          <img src={MovieIcn} alt="Icon" />
          <span>{props.movie.category}</span>
          <div className="dot"></div>
          <span>{props.movie.rating}</span>
        </div>
        <h3 className="movie-title">{props.movie.title}</h3>
      </div>
    </article>
  );
};

export default MediaCard;
