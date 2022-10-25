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
  ];
  return (
    <section id="certifications">
      <h2>My Certifications</h2>
      <h5>Swipe Right For Next </h5>

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
    </section>
  );
};

export default Certification;
