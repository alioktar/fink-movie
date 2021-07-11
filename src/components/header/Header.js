import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("movies");

  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <nav className="nav">
        <span
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("movies");
          }}
          className={activeLink === "movies" ? "active" : ""}
        >
          Movies
        </span>
        <span
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("tvShows");
          }}
          className={activeLink === "tvShows" ? "active" : ""}
        >
          Tv Shows
        </span>
      </nav>
    </header>
  );
};

export default Header;
