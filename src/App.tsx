import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Signup from "./pages/Signup";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import { authActions } from "./store/auth/auth";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(authActions.checkIfTokenExists());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {!isAuthenticated ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        {!isAuthenticated && <Route path="/signup" element={<Signup />} />}
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
