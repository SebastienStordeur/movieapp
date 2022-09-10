import React, { useState, useEffect } from "react";

import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase-config";

import MovieIcn from "../../../assets/icon-category-movie.svg";
import Bookmark from "../../../assets/icon-bookmark-empty.svg";
import Bookmarked from "../../../assets/icon-bookmark-full.svg";

interface IMedia {
  movie: {
    title: string;
    thumbnail: {
      /*       trending: {
        small: string;
        large: string;
      }; */
      regular: {
        small: string;
        medium: string;
        large: string;
      };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
  };
}

const MediaCard: React.FC<IMedia> = (props) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const auth: Auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setIsAuthenticated(true);
        const userRef: DocumentReference<DocumentData> = doc(db, "users", user.uid);
        const userSnap: Promise<DocumentSnapshot<DocumentData>> = getDoc(userRef);
        if (userSnap) {
          userSnap.then((res) => {
            const data: DocumentData | undefined = res.data();
            if (data !== undefined) {
              const isFound: boolean = data.bookmarks.find((movie: any) => movie.title === props.movie.title);
              if (isFound) {
                setIsBookmarked(true);
              }
            }
          });
        }
      }
    });
  }, [auth, isBookmarked, props]);

  const addMovieToBookmarkHandler: () => void = async () => {
    if (auth.currentUser !== null) {
      const userDoc = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userDoc, {
        bookmarks: arrayUnion(props.movie),
      }).then(() => {
        setIsBookmarked(true);
      });
    }
  };

  const removeMovieFromBookmarkHandler: () => void = async () => {
    if (auth.currentUser !== null) {
      const userDoc = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userDoc, {
        bookmarks: arrayRemove(props.movie),
      }).then(() => {
        setIsBookmarked(false);
      });
    }
  };

  return (
    <article className="recommended-movie">
      {isAuthenticated && (
        <button
          className="bookmark"
          onClick={isBookmarked ? removeMovieFromBookmarkHandler : addMovieToBookmarkHandler}
        >
          <img src={isBookmarked ? Bookmarked : Bookmark} alt="Bookmark this media" />
        </button>
      )}
      <div className="image-movie">
        <picture>
          <source srcSet={props.movie.thumbnail.regular.large} media="(min-width:1024px)" />
          <source srcSet={props.movie.thumbnail.regular.medium} media="(min-width:768px)" />
          <img src={props.movie.thumbnail.regular.small} alt={props.movie.title} />
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
