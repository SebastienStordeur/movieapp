import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Signup from "./pages/Signup";
import Bookmarks from "./pages/Bookmarks";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App: React.FC = () => {
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    return user;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="*" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
