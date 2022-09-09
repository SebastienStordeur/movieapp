import React, { useState, useEffect } from "react";
import MediaCard from "../Medias/MediaCard";
import { IMedias } from "../Medias/Medias";

import { getAuth } from "firebase/auth";
import { db } from "../../../firebase-config";
import { doc, getDoc } from "firebase/firestore";

const BookmarkSection: React.FC<IMedias> = (props) => {
  const [bookmarked, setBookmarked] = useState<any>([]);
  const auth = getAuth();

  /*   useEffect(() => {
    if (props.value.length > 0) {
      setIsEmpty(() => false);
    } else {
      setIsEmpty(() => true);
    }
  }, [props.value]); */

  useEffect(() => {
    if (auth.currentUser) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = getDoc(userRef);

      console.log("ok");
      if (userSnap) {
        userSnap.then((res) => {
          setBookmarked(() => res.data());
          console.log("isBookmarked", bookmarked);
        });
      } else {
        console.log("nothing");
      }
    }
  }, [auth]);

  return (
    <section className="bookmark-section">
      <h2 className="bookmark-title">{props.title}</h2>
      <div className="bookmark-grid">
        {props.medias.map((movie) => {
          return (
            <MediaCard
              movie={movie}
              key={Math.random().toString()}
              /* bookmarks={bookmarked} */
            />
          );
        })}
      </div>
    </section>
  );
};

export default BookmarkSection;
