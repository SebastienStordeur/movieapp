import React from "react";
import { useSelector } from "react-redux";

import Logo from "../../assets/logo.svg";
import Navlinks from "./Navlinks/Navlinks";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <React.Fragment>
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo-header" title="Logo" />
        <Navlinks />
        <div className="log-nav">
          {isAuthenticated && <p>Logout</p>}
          {!isAuthenticated && <Link to="/login">Login</Link>}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
