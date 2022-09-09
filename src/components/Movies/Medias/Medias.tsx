import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../../firebase-config";

import { Movie } from "../Trending/Trending";
import MediaCard from "./MediaCard";
import Bookmarks from "../../../pages/Bookmarks";

export interface IMedias {
  title: string;
  value?: string | undefined | any;
  medias:
    | {
        title: string;
        thumbnail: {
          trending: {
            small: string;
            large: string;
          };
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
      }[];
}

const Medias: React.FC<IMedias> = (props) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [bookmarked, setBookmarked] = useState<any>([]);
  const auth = getAuth();

  useEffect(() => {
    if (auth.currentUser !== null) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = getDoc(userRef);

      if (userSnap) {
        userSnap.then((res) => {
          setBookmarked(() => res.data());
          console.log(bookmarked);
        });
      }
    }
  }, [auth]);

  /*   useEffect(() => {
    if (props.value.length > 0) {
      setIsEmpty(() => false);
    } else {
      setIsEmpty(() => true);
    }
  }, [props.value]); */

  /*   useEffect(() => {
    if (auth.currentUser) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = getDoc(userRef);

      if (userSnap) {
        userSnap.then((res) => {
          setBookmarked(() => res.data());
          //console.log("isBookmarked", bookmarked);
        });
      } else {
        console.log("nothing");
      }
    }
  }, [auth]); */

  /*  console.log("bookmarked", bookmarked); */

  return (
    <section id="recommended" className="recommended-section">
      {isEmpty && <h2 className="recommended-title">{props.title}</h2>}
      {!isEmpty && (
        <h2 className="recommended-title">
          Found {props.medias.length} results for ‘{props.value}’
        </h2>
      )}
      <div className="recommended-grid">
        {props.medias
          ? props.medias.map((movie: Movie) => {
              return (
                <MediaCard
                  movie={movie}
                  key={Math.random().toString()}
                  bookmarks={bookmarked.bookmarks}
                />
              );
            })
          : ""}
      </div>
    </section>
  );
};

export default Medias;
