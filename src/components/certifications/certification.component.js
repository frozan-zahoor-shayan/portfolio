import React from "react";
import "./certification.component.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import img1 from "../../assets/images/certifications/certification1.jpg";
import img2 from "../../assets/images/certifications/certification2.jpg";
import img3 from "../../assets/images/certifications/certification3.jpg";
import img4 from "../../assets/images/certifications/certification4.jpg";
import img5 from "../../assets/images/certifications/certification5.jpg";
import img6 from "../../assets/images/certifications/certification6.jpg";
import img7 from "../../assets/images/certifications/certification7.jpg";

import imgL1 from "../../assets/images/certifications/certificateL1.jpg";
import imgL2 from "../../assets/images/certifications/certificateL2.jpg";
import imgL3 from "../../assets/images/certifications/certificateL3.jpg";
import imgL4 from "../../assets/images/certifications/certificateL4.jpg";
import imgL5 from "../../assets/images/certifications/certificateL5.jpg";
import imgL6 from "../../assets/images/certifications/certificateL6.jpg";
import imgL7 from "../../assets/images/certifications/certificateL7.jpg";

const Certification = () => {
  const data = [
    {
      certification: img1,
    },
    {
      certification: img2,
    },
    {
      certification: img3,
    },
    {
      certification: img4,
    },
    {
      certification: img5,
    },
    {
      certification: img6,
    },
    {
      certification: img7,
    },
  ];

  const dataL = [
    {
      certification: imgL1,
    },
    {
      certification: imgL2,
    },
    {
      certification: imgL3,
    },
    {
      certification: imgL4,
    },
    {
      certification: imgL5,
    },
    {
      certification: imgL6,
    },
    {
      certification: imgL7,
    },
  ];

  return (
    <section id="certifications">
      <h2>My Certifications</h2>
      <h5>Swipe Right For Next </h5>

      <div className="cer">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper container certification-container"
        >
          {data.map(({ certification }, i) => {
            return (
              <SwiperSlide key={i} className="certification">
                <img src={certification} alt="certification" />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper container certification-container"
        >
          {dataL.map(({ certification }, i) => {
            return (
              <SwiperSlide key={i} className="certification">
                <img src={certification} alt="certification" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Certification;
