import React from "react";
import "./footer.components.scss";
// import { FaFacebook } from 'react-icons/fa';
// import { FiInstagram } from 'react-icons/fi';
// import { IoLogoTwitter } from "react-icons/io";
// import Me from "../../assets/images/me.jpg";

function Footer() {
  return (
    <footer>
      <a href="#header" className="footer_logo">
        {/* <img src={Me} alt="" /> */}
        Frozan Zahoor Shayan
      </a>

      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        {/* <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Gallary</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div> */}

      <div className="footer_copyright">
        <small>
          Copyright &copy; 2022 Frozan Zahoor Shayan, All Rights Reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;
