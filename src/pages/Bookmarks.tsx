import React, { useEffect, useState } from "react";

import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

import Header from "../components/Layouts/Header/Header";
import Main from "../components/Layouts/Main/Main";
import Search from "../components/Search/Search";
import BookmarkSection from "../components/Movies/Bookmarked/Bookmarks";

const Bookmarks: React.FC = () => {
  const auth = getAuth();
  const [bookmarked, setBookmarked] = useState<any>([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState<any>("");

  useEffect(() => {
    if (auth.currentUser != null) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = getDoc(userRef);
      if (userSnap) {
        userSnap.then((res) => {
          const data = res.data();
          if (data !== undefined) {
            setBookmarked(() => data.bookmarks);
          }
        });
      } else {
        console.log("nothing to display");
      }
    }
  }, [auth]);

  console.log(bookmarked);

  const filteredMovies = bookmarked.filter(
    (movie: any) => movie.category === "Movie"
  );

  const filteredSeries = bookmarked.filter(
    (movie: any) => movie.category === "TV Series"
  );

  return (
    <React.Fragment>
      <Header />
      <Main>
        <BookmarkSection title="Bookmarked Movies" medias={filteredMovies} />
        <BookmarkSection title="Bookmarded TV Series" medias={filteredSeries} />
        {/* <Search placeholder="Search for bookmarked shows" /> */}

        {/*         <section className="bookmarked-section">
          <h2 className="bookmarked-title">Movies and TV series bookmarked</h2> */}
        {/*           {bookmarked.bookmarks.map((movie: any) => {
            return <MediaCard movie={movie} key={Math.random().toString()} />;
          })} */}
      </Main>
    </React.Fragment>
  );
};

export default Bookmarks;
