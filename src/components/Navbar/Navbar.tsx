import React, { useState } from "react";

import Logo from "../../assets/logo.svg";
import Navlinks from "./Navlinks/Navlinks";
import { Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const auth = getAuth();

  onAuthStateChanged(auth, () => {
    if (auth.currentUser !== null) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });

  const logoutHandler = () => {
    signOut(auth);
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="logo-header" title="Logo" />
      <Navlinks />
      <div className="log-nav">
        {isAuthenticated && <p onClick={logoutHandler}>Logout</p>}
        {!isAuthenticated && <Link to="/login">Login</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
