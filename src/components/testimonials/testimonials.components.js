import React from "react";
import "./testimonials.components.scss";

import gallary1 from "../../assets/images/gallary/gallary1.jpg";
import gallary2 from "../../assets/images/gallary/gallary2.jpg";
import gallary3 from "../../assets/images/gallary/gallary3.jpg";
import gallaryL1 from "../../assets/images/gallary/gallary4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

function Testimonials() {
  const data = [
    {
      avatar: gallary1,
    },
    {
      avatar: gallary2,
    },
    {
      avatar: gallary3,
    },
    // {
    //   avatar: gallary4,
    // },
  ];

  const dataL = [
    {
      avatar: gallaryL1,
    },
  ];

  return (
    <section id="testimonials">
      <h5>My Students</h5>
      <h2>Gallery</h2>
      <h5>Swipe Right For Next </h5>

      <div className="divider">
        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={40}
          modules={[Pagination]}
          className="mySwiper container testimonials_container"
        >
          {data.map(({ avatar, name, review }, i) => {
            return (
              <SwiperSlide key={i} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                {/* <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small> */}
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={40}
          modules={[Pagination]}
          className="mySwiper container testimonials_container"
        >
          {dataL.map(({ avatar, name, review }, i) => {
            return (
              <SwiperSlide key={i} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                {/* <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
