import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLinksWrapper">
        <ul className="footerLinks">
          <li>
            <Link to="Impressum">Impressum</Link>
          </li>
          <li>
            <Link to="Dazenschutzerklaerung">Datenschutz</Link>
          </li>
        </ul>
        <div className="iconsDiv">
          <a
            href="https://www.instagram.com/liebevollbelichtet/?next=%2F"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-Instagram icon"></span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100064589986762"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-facebook icon"></span>
          </a>
          <Link to="Kontakt">
            <span className="icon-email icon"></span>
          </Link>
        </div>
      </div>
      <span className="copyright">Copyright © Michael Godabreli</span>
    </div>
  );
};
