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

  const filteredMovies = bookmarked.filter((movie: any) => movie.category === "Movie");

  const filteredSeries = bookmarked.filter((movie: any) => movie.category === "TV Series");

  return (
    <React.Fragment>
      <Header />
      <Main>
        {/* <Search placeholder="Search for bookmarked shows" /> */}
        <BookmarkSection title="Bookmarked Movies" medias={filteredMovies} />
        <BookmarkSection title="Bookmarded TV Series" medias={filteredSeries} />
      </Main>
    </React.Fragment>
  );
};

export default Bookmarks;
