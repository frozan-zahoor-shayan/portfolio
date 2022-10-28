import React from "react";
import About from "../../components/about/about.components";
import Certification from "../../components/certifications/certification.component";
import Contact from "../../components/contact/contact.components";
// import Experience from "../../components/experience/experience.components";
import Footer from "../../components/footer/footer.components";
import Header from "../../components/header/header.components";
// import Nav from "../../components/nav/nav.components";
import Portfolio from "../../components/portfolio/portfolio.components";
// import Services from "../../components/services/services.components";
import Testimonials from "../../components/testimonials/testimonials.components";
import "./main.page.scss";


const Main = () => {
  return (
    <>
      {/* <div className="background"></div> */}
      <Header></Header>
      {/* <Nav></Nav> */}
      <About></About>
      {/* <Experience></Experience> */}
      {/* <Services></Services> */}
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Certification></Certification>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Main;
