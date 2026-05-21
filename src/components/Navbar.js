import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">
        Pinterest Clone
      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/profile">
          Profile
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;