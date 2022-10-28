import React from "react";
import "./about.components.scss";
import ME from "../../assets/images/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      {/* <h5>Get To Know</h5> */}
      <h2>About Me</h2>

      <div className="container about_container">
        {/* <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About Img" />
          </div>
        </div> */}

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>19 Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Students</h5>
              <small>300+</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>portfolio</h5>
              <small>100+ Completed</small>
            </article>
          </div>

          <p>
            I am Ghulam Mohammad Maimanagi teacher of handicrafts I have been
            teaching this art field for 19 years, and I have graduated 300+
            female students during these years, and I have left behind many
            scientific works
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
