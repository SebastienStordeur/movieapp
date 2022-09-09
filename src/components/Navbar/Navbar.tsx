import React, { useState, useEffect, useRef } from "react";

import Logo from "../../assets/logo.svg";
import Navlinks from "./Navlinks/Navlinks";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navbar: React.FC = () => {
  /* const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); */
  const auth = getAuth();
  /*  let isAuthenticated: boolean = false; */

  const isAuthenticated = useRef<any>(false);

  console.log(auth.currentUser);
  useEffect(() => {
    if (auth.currentUser) {
      isAuthenticated.current = true;
    } else {
      isAuthenticated.current = false;
    }
  }, [auth]);

  const logoutHandler = () => {
    signOut(auth);
  };

  return (
    <React.Fragment>
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo-header" title="Logo" />
        <Navlinks />
        <div className="log-nav">
          {isAuthenticated.current && <p onClick={logoutHandler}>Logout</p>}
          {!isAuthenticated.current && <Link to="/login">Login</Link>}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
