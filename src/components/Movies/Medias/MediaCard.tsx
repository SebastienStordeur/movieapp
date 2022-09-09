import React, { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

import { IMovie } from "../Trending/TrendingMovie";
import MovieIcn from "../../../assets/icon-category-movie.svg";
import Bookmark from "../../../assets/icon-bookmark-empty.svg";
import Bookmarked from "../../../assets/icon-bookmark-full.svg";

interface IMedia extends IMovie {
  bookmarks?: any[];
}

const MediaCard: React.FC<IMedia> = (props) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      setIsAuthenticated(() => true);
      if (props.bookmarks !== undefined) {
        const isFound: boolean = props.bookmarks.find(
          (movie) => movie.title === props.movie.title
        );
        if (isFound) {
          setIsBookmarked(() => true);
          console.log(isBookmarked);
        }
      }
    });
  }, [auth, isBookmarked, props]);

  const addMovieToBookmarkHandler = async () => {
    if (auth.currentUser !== null) {
      const userDoc = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userDoc, {
        bookmarks: arrayUnion(props.movie),
      });
    }
  };

  const removeMovieFromBookmarkHandler = async () => {
    if (auth.currentUser !== null) {
      const userDoc = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userDoc, {
        bookmarks: arrayRemove(props.movie),
      });
    }
  };

  return (
    <article className="recommended-movie">
      {isAuthenticated && (
        <button className="bookmark">
          <img
            src={isBookmarked ? Bookmarked : Bookmark}
            alt="Bookmark this media"
            onClick={
              isBookmarked
                ? removeMovieFromBookmarkHandler
                : addMovieToBookmarkHandler
            }
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
