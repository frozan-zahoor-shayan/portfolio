import React from "react";
import "./about.components.scss";
import ME from "../../assets/images/me-about.JPG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About Img" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>20+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Students</h5>
              <small>100+</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>portfolio</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>
            I am an experienced art teacher. I bring about 20 years’ experience
            working in art and different sections related to my field of study.
            Due to my qualification, extensive background, training I was able
            to graduate students for 8 years in any different field of art I am
            very confident of Management, Supervision, Monitoring, evaluation,
            Coordinating, reporting, Analyzing, interpreting, team work.
          </p>
          <p>
            I have worked with save the children Fund They provided awards for
            our students and we have worked together in 2 expositions in 2 years
            which was held for children arts.
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
