import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../../assets/logo.svg";
import Navlinks from "./Navlinks/Navlinks";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import { authActions } from "../../store/auth/auth";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <React.Fragment>
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo-header" title="Logo" />
        <Navlinks />
        <div className="log-nav">
          {isAuthenticated && <p onClick={logoutHandler}>Logout</p>}
          {!isAuthenticated && <Link to="/login">Login</Link>}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
