import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./navbar.css";

const mobNavLinks = [
  { title: "Home", link: "/" },
  { title: "Galerie", link: "/Galerie" },
  { title: "Über mich", link: "/Uebermich" },
  { title: "Kontakt", link: "/Kontakt" },
];

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
    <>
      <AnimatePresence>
        {mobNavBarVisible && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{
              scaleY: 0,
              transition: {
                duration: 0.3,
                ease: [0.51, 0.21, 0.38, 0.82],
                delay: 0.8,
              },
            }}
            transition={{
              duration: 0.3,
              ease: [0.51, 0.21, 0.38, 0.82],
            }}
            className="mobileNavBar"
          >
            <motion.div
              className="xbutton"
              whileTap={{ scale: 0.85 }}
              onClick={() => setMobNavBarVisible(!mobNavBarVisible)}
            >
              &times;
            </motion.div>
            <div className="navList">
              {mobNavLinks.map((link, index) => {
                return (
                  <div className="linkWrapper" key={index}>
                    <motion.div
                      initial={{ y: 50 }}
                      animate={{ y: 0 }}
                      exit={{ y: 100 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.51, 0.21, 0.38, 0.82],
                        delay: (1 + index) * 0.15,
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="linkDiv"
                    >
                      <Link
                        to={link.link}
                        onClick={() => setMobNavBarVisible(!mobNavBarVisible)}
                      >
                        {link.title}
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
              <NavLink
                to="/Galerie"
                onClick={() => setLinkActiv("galerieLink")}
              >
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
    </>
  );
};
