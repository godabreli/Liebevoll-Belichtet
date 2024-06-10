import { NavLink } from "react-router-dom";
import "./MobileNavBar.css";

export const MobileNavBar = ({ mobNavBarVisible, setMobNavBarVisible }) => {
  return (
    <nav className="mobileNavBar">
      <div
        className="xbutton"
        onClick={() => setMobNavBarVisible(!mobNavBarVisible)}
      >
        &times;
      </div>
      <ul className="navList">
        <li className="navLink">
          <NavLink
            to="/"
            onClick={() => setMobNavBarVisible(!mobNavBarVisible)}
          >
            Home
          </NavLink>
        </li>
        <li className="navLink">
          <NavLink
            to="/Galerie"
            onClick={() => setMobNavBarVisible(!mobNavBarVisible)}
          >
            Galerie
          </NavLink>
        </li>
        <li className="navLink">
          <NavLink
            to="/Uebermich"
            onClick={() => setMobNavBarVisible(!mobNavBarVisible)}
          >
            Über Mich
          </NavLink>
        </li>
        <li className="navLink">
          <NavLink
            to="/Kontakt"
            onClick={() => setMobNavBarVisible(!mobNavBarVisible)}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
