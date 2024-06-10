import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import "./navbar.css";

export const Navbar = ({ mobNavBarVisible, setMobNavBarVisible }) => {
  const [linkActive, setLinkActiv] = useState("");

  if (linkActive === "homeLink")
    setLinkActiv({ transform: "translate(0px, 0px)" });

  const galerieLinkStyle =
    linkActive === "galerieLink"
      ? { transform: "translate(0px, -6px)" }
      : { transform: "translate(0px, 0px)" };

  const ueberMichLinStyle =
    linkActive === "ueberMichLink"
      ? { transform: "translate(0px, -6px)" }
      : { transform: "translate(0px, 0px)" };

  const kontaktLinkStyle =
    linkActive === "kontaktLink"
      ? { transform: "translate(0px, -6px)" }
      : { transform: "translate(0px, 0px)" };

  return (
    <nav className="navbar">
      <img
        className="logo"
        src="../Logo.png"
        alt="Liebevoll Belichtet Logo"
      ></img>
      <ul className="navbar-list">
        <li>
          <div className="homeLink">
            <Link to="/" onClick={() => setLinkActiv("homeLink")}>
              Home
            </Link>
          </div>
        </li>
        <li>
          <div className="galerieLink" style={galerieLinkStyle}>
            <NavLink to="/Galerie" onClick={() => setLinkActiv("galerieLink")}>
              Galerie
            </NavLink>
          </div>
        </li>
        <li>
          <div className="uebermichLink" style={ueberMichLinStyle}>
            <NavLink
              to="Uebermich"
              onClick={() => setLinkActiv("ueberMichLink")}
            >
              Über mich
            </NavLink>
          </div>
        </li>
        <li>
          <div className="kontaktLink" style={kontaktLinkStyle}>
            <NavLink to="Kontakt" onClick={() => setLinkActiv("kontaktLink")}>
              Kontakt
            </NavLink>
          </div>
        </li>
      </ul>
      <div className="menuIcon">
        <span
          className="material-symbols-outlined"
          onClick={() => setMobNavBarVisible(!mobNavBarVisible)}
        >
          menu
        </span>
      </div>
    </nav>
  );
};
