import React from "react";
import "./portfolio.components.scss";
import IMG1 from "../../assets/images/portfolios/portfolio1.jpg";
import IMG2 from "../../assets/images/portfolios/portfolio2.jpg";
import IMG3 from "../../assets/images/portfolios/portfolio3.jpg";
import IMG4 from "../../assets/images/portfolios/portfolio4.jpg";
import IMG5 from "../../assets/images/portfolios/portfolio5.jpg";
import IMG6 from "../../assets/images/portfolios/portfolio6.jpg";
import IMG7 from "../../assets/images/portfolios/portfolio7.jpg";
import IMG8 from "../../assets/images/portfolios/portfolio8.jpg";
import IMG9 from "../../assets/images/portfolios/portfolio9.jpg";
import IMG10 from "../../assets/images/portfolios/portfolio10.jpg";
import IMG11 from "../../assets/images/portfolios/portfolio11.jpg";
import IMG12 from "../../assets/images/portfolios/portfolio12.jpg";
import IMG13 from "../../assets/images/portfolios/portfolio13.jpg";
// import IMG14 from "../../assets/images/portfolios/portfolio14.jpg";
import IMG15 from "../../assets/images/portfolios/portfolio15.jpg";
import IMG16 from "../../assets/images/portfolios/portfolio16.jpg";
import IMG17 from "../../assets/images/portfolios/portfolio17.jpg";
import IMG18 from "../../assets/images/portfolios/portfolio18.jpg";
import IMG19 from "../../assets/images/portfolios/portfolio19.jpg";
import IMG20 from "../../assets/images/portfolios/portfolio20.jpg";
import IMG21 from "../../assets/images/portfolios/portfolio21.jpg";
import IMG22 from "../../assets/images/portfolios/portfolio22.jpg";
import IMG23 from "../../assets/images/portfolios/portfolio23.jpg";
import IMG24 from "../../assets/images/portfolios/portfolio24.jpg";
import IMG25 from "../../assets/images/portfolios/portfolio25.jpg";
import IMG26 from "../../assets/images/portfolios/portfolio26.jpg";
import IMG27 from "../../assets/images/portfolios/portfolio27.jpg";
import IMG28 from "../../assets/images/portfolios/portfolio28.jpg";
import IMG29 from "../../assets/images/portfolios/portfolio29.jpg";
import IMG30 from "../../assets/images/portfolios/portfolio30.jpg";
import IMG31 from "../../assets/images/portfolios/portfolio31.jpg";
import IMG32 from "../../assets/images/portfolios/portfolio32.jpg";
import IMG33 from "../../assets/images/portfolios/portfolio33.jpg";
import IMG34 from "../../assets/images/portfolios/portfolio34.jpg";
import IMG35 from "../../assets/images/portfolios/portfolio35.jpg";
import IMG36 from "../../assets/images/portfolios/portfolio36.jpg";
import IMG37 from "../../assets/images/portfolios/portfolio37.jpg";
import IMG38 from "../../assets/images/portfolios/portfolio38.jpg";
import IMG39 from "../../assets/images/portfolios/portfolio39.jpg";
import IMG40 from "../../assets/images/portfolios/portfolio40.jpg";
import IMG41 from "../../assets/images/portfolios/portfolio41.jpg";
import IMG42 from "../../assets/images/portfolios/portfolio42.jpg";
import IMG43 from "../../assets/images/portfolios/portfolio43.jpg";
import IMG44 from "../../assets/images/portfolios/portfolio44.jpg";
import IMG45 from "../../assets/images/portfolios/portfolio45.jpg";
import IMG46 from "../../assets/images/portfolios/portfolio46.jpg";
import IMG47 from "../../assets/images/portfolios/portfolio47.jpg";
import IMG48 from "../../assets/images/portfolios/portfolio48.jpg";
import IMG49 from "../../assets/images/portfolios/portfolio49.jpg";
import IMG50 from "../../assets/images/portfolios/portfolio50.jpg";

import IMGL1 from "../../assets/images/portfolios/portfolioL1.jpg";
import IMGL2 from "../../assets/images/portfolios/portfolioL2.jpg";
import IMGL3 from "../../assets/images/portfolios/portfolioL3.jpg";
import IMGL4 from "../../assets/images/portfolios/portfolioL4.jpg";
import IMGL5 from "../../assets/images/portfolios/portfolioL5.jpg";
import IMGL6 from "../../assets/images/portfolios/portfolioL6.jpg";
import IMGL7 from "../../assets/images/portfolios/portfolioL7.jpg";
import IMGL8 from "../../assets/images/portfolios/portfolioL8.jpg";
import IMGL9 from "../../assets/images/portfolios/portfolioL9.jpg";
import IMGL10 from "../../assets/images/portfolios/portfolioL10.jpg";
import IMGL11 from "../../assets/images/portfolios/portfolioL11.jpg";
import IMGL12 from "../../assets/images/portfolios/portfolioL12.jpg";
import IMGL13 from "../../assets/images/portfolios/portfolioL13.jpg";
import IMGL14 from "../../assets/images/portfolios/portfolioL14.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";

function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
    },
    {
      id: 2,
      image: IMG2,
    },
    {
      id: 3,
      image: IMG3,
    },
    {
      id: 4,
      image: IMG4,
    },
    {
      id: 5,
      image: IMG5,
    },
    {
      id: 6,
      image: IMG6,
    },
    {
      id: 7,
      image: IMG7,
    },
    {
      id: 8,
      image: IMG8,
    },
    {
      id: 9,
      image: IMG9,
    },
    {
      id: 10,
      image: IMG10,
    },
    {
      id: 11,
      image: IMG11,
    },
    {
      id: 12,
      image: IMG12,
    },
    {
      id: 13,
      image: IMG13,
    },
    // {
    //   id: 14,
    //   image: IMG14,
    // },
    {
      id: 15,
      image: IMG15,
    },
    {
      id: 16,
      image: IMG16,
    },
    {
      id: 17,
      image: IMG17,
    },
    {
      id: 18,
      image: IMG18,
    },
    {
      id: 19,
      image: IMG19,
    },
    {
      id: 20,
      image: IMG20,
    },
    {
      id: 21,
      image: IMG21,
    },
    {
      id: 22,
      image: IMG22,
    },
    {
      id: 23,
      image: IMG23,
    },
    {
      id: 24,
      image: IMG24,
    },
    {
      id: 25,
      image: IMG25,
    },
    {
      id: 26,
      image: IMG26,
    },
    {
      id: 27,
      image: IMG27,
    },
    {
      id: 28,
      image: IMG28,
    },
    {
      id: 29,
      image: IMG29,
    },
    {
      id: 30,
      image: IMG30,
    },
    {
      id: 31,
      image: IMG31,
    },
    {
      id: 32,
      image: IMG32,
    },
    {
      id: 33,
      image: IMG33,
    },
    {
      id: 34,
      image: IMG34,
    },
    {
      id: 35,
      image: IMG35,
    },
    {
      id: 36,
      image: IMG36,
    },
    {
      id: 37,
      image: IMG37,
    },
    {
      id: 38,
      image: IMG38,
    },
    {
      id: 39,
      image: IMG39,
    },
    {
      id: 40,
      image: IMG40,
    },
    {
      id: 41,
      image: IMG41,
    },
    {
      id: 42,
      image: IMG42,
    },
    {
      id: 43,
      image: IMG43,
    },
    {
      id: 44,
      image: IMG44,
    },
    {
      id: 45,
      image: IMG45,
    },
    {
      id: 46,
      image: IMG46,
    },
    {
      id: 47,
      image: IMG47,
    },
    {
      id: 48,
      image: IMG48,
    },
    {
      id: 49,
      image: IMG49,
    },
    {
      id: 50,
      image: IMG50,
    },
  ];

  const dataL = [
    {
      id: 1,
      image: IMGL1,
    },
    {
      id: 2,
      image: IMGL2,
    },
    {
      id: 3,
      image: IMGL3,
    },
    {
      id: 4,
      image: IMGL4,
    },
    {
      id: 5,
      image: IMGL5,
    },
    {
      id: 6,
      image: IMGL6,
    },
    {
      id: 7,
      image: IMGL7,
    },
    {
      id: 8,
      image: IMGL8,
    },
    {
      id: 9,
      image: IMGL9,
    },
    {
      id: 10,
      image: IMGL10,
    },
    {
      id: 11,
      image: IMGL11,
    },
    {
      id: 12,
      image: IMGL12,
    },
    {
      id: 13,
      image: IMGL13,
    },
    {
      id: 14,
      image: IMGL14,
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <h5>Swipe Right For Next </h5>

      <div className="divider">
        <Swiper //it was a articale tag
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="container portfolio_container mySwiper"
        >
          {data.map(({ id, image }) => {
            return (
              //it was a div
              <SwiperSlide className="portfolio_item" key={id}>
                <div className="portfolio_item_image">
                  <img src={image} alt="portfolio" />
                </div>
                {/* <h3>{title}</h3> */}

                {/* <div className="portfolio_item_cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div> */}
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Swiper //it was a articale tag
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="container portfolio_container mySwiper"
        >
          {dataL.map(({ id, image }) => {
            return (
              //it was a div
              <SwiperSlide className="portfolio_item" key={id}>
                <div className="portfolio_item_image">
                  <img src={image} alt="portfolio" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Portfolio;
