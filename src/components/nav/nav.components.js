import React, { useState } from "react";
import "./nav.components.scss";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
import { RiGalleryFill } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaAward } from "react-icons/fa";

function Nav() {
  const [activeNav,SetActiveNav]=useState('header')
  return (
    <nav>
      <a
        href="#header"
        className={activeNav === "header" ? "active" : ""}
        onClick={() => SetActiveNav("header")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "about" ? "active" : ""}
        onClick={() => SetActiveNav("about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "experience" ? "active" : ""}
        onClick={() => SetActiveNav("experience")}
      >
        <BiBook />
      </a>
      <a
        href="#testimonials"
        className={activeNav === "services" ? "active" : ""}
        onClick={() => SetActiveNav("services")}
      >
        <RiGalleryFill/>
      </a>
      <a
        href="#certifications"
        className={activeNav === "certification" ? "active" : ""}
        onClick={() => SetActiveNav("certification")}
      >
        <FaAward />
      </a>
      <a
        href="#contact"
        className={activeNav === "contact" ? "active" : ""}
        onClick={() => SetActiveNav("contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
