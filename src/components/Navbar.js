import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >=10){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
  <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img src="../img/pokemon.png" alt=""/>
      </Link>
      <ul className={click ? "nav-menu.active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemon">List Pokemon</Link>
        </li>
        <li>
          <Link to="/poke">My Pokemon</Link>
        </li>
        <li className="auth">
          <Link to="/login">Login</Link>
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