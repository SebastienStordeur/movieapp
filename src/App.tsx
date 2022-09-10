import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Signup from "./pages/Signup";
import Bookmarks from "./pages/Bookmarks";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      setIsAuthenticated(true);
    }
    return user;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {!isAuthenticated && <Route path="/login" element={<Login />} />}
        {!isAuthenticated && <Route path="/signup" element={<Signup />} />}
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        {isAuthenticated && <Route path="/bookmarks" element={<Bookmarks />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
