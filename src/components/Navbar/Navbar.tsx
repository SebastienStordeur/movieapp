import React from "react";

import Logo from "../../assets/logo.svg";
import Navlinks from "./Navlinks/Navlinks";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="logo-header" title="Logo" />
      <Navlinks />
      <div className="profile-picture"></div>
    </nav>
  );
};

export default Navbar;
