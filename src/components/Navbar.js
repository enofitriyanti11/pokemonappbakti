import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { isLoggedIn } from "../service/login";
import { logout } from "../service/logout";
import {  } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const navigate = useNavigate();

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const isUserLoggedIn = isLoggedIn();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img src="../img/pokemon.png" alt="" />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isUserLoggedIn && (
          <>
            <li>
              <Link to="/pokemon">List Pokemon</Link>
            </li>
            <li>
              <Link to="/poke">My Pokemon</Link>
            </li>
          </>
        )}
        <li>
          {isUserLoggedIn ? (
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
      <div className="menu" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
