import React from "react";
import { Link } from "react-router-dom";

import "../CSS/navbar.css";
import logo from "../resources/images/logo.png";

const Navbar = () => {
  return (
    <NavbarMenu>
      <NavItem />
    </NavbarMenu>
  );
};

function NavbarMenu(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  );
}

function NavItem(props) {
  return (
    <li className="nav-item">
      {/* <a href="#" className="icon-button"> */}
        <Link to="/">
          <img
            src={logo}
            alt="groovegaming-logo"
            className="groovegaming-logo"
          />
        </Link>
      {/* </a> */}
    </li>
  );
}

export default Navbar;
