import React from "react";
import "./testimonials.components.scss";

// import gallary1 from "../../assets/images/gallary/gallary1.jpg";
import gallary2 from "../../assets/images/gallary/gallary2.jpg";
import gallary3 from "../../assets/images/gallary/gallary3.jpg";
// import gallary4 from "../../assets/images/gallary/gallary4.jpg";
import gallary5 from "../../assets/images/gallary/gallary5.jpg";
// import gallary6 from "../../assets/images/gallary/gallary6.jpg";
// import gallary7 from "../../assets/images/gallary/gallary7.jpg";
import gallary8 from "../../assets/images/gallary/gallary8.jpg";
import gallary9 from "../../assets/images/gallary/gallary9.jpg";
import gallaryL1 from "../../assets/images/gallary/gallaryL1.jpg";
// import gallaryL2 from "../../assets/images/gallary/gallaryL2.jpg";
import gallaryL3 from "../../assets/images/gallary/gallaryL3.jpg";
import gallaryL4 from "../../assets/images/gallary/gallaryL4.jpg";
import gallaryL5 from "../../assets/images/gallary/gallaryL5.jpg";
import gallaryL6 from "../../assets/images/gallary/gallaryL6.jpg";
import gallaryL7 from "../../assets/images/gallary/gallaryL7.jpg";
// import gallaryL8 from "../../assets/images/gallary/gallaryL8.jpg";
import gallaryL9 from "../../assets/images/gallary/gallaryL9.jpg";
// import gallaryL10 from "../../assets/images/gallary/gallaryL10.jpg";
import gallaryL11 from "../../assets/images/gallary/gallaryL11.jpg";
// import gallaryL12 from "../../assets/images/gallary/gallaryL12.jpg";
import gallaryL13 from "../../assets/images/gallary/gallaryL13.jpg";
// import gallaryL14 from "../../assets/images/gallary/gallaryL14.jpg";
// import gallaryL15 from "../../assets/images/gallary/gallaryL15.jpg";
// import gallaryL16 from "../../assets/images/gallary/gallaryL16.jpg";
import gallaryL17 from "../../assets/images/gallary/gallaryL17.jpg";
// import gallaryL18 from "../../assets/images/gallary/gallaryL18.jpg";
import gallaryL19 from "../../assets/images/gallary/gallaryL19.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

function Testimonials() {
  const data = [
    // {
    //   avatar: gallary1,
    // },
    {
      avatar: gallary2,
    },
    {
      avatar: gallary3,
    },
    // {
    //   avatar: gallary4,
    // },
    {
      avatar: gallary5,
    },
    // {
    //   avatar: gallary6,
    // },
    // {
    //   avatar: gallary7,
    // },
    {
      avatar: gallary8,
    },
    {
      avatar: gallary9,
    },
  ];

  const dataL = [
    {
      avatar: gallaryL1,
    },
    // {
    //   avatar: gallaryL2,
    // },
    {
      avatar: gallaryL3,
    },
    {
      avatar: gallaryL4,
    },
    {
      avatar: gallaryL5,
    },
    {
      avatar: gallaryL6,
    },
    {
      avatar: gallaryL7,
    },
    // {
    //   avatar: gallaryL8,
    // },
    {
      avatar: gallaryL9,
    },
    // {
    //   avatar: gallaryL10,
    // },
    {
      avatar: gallaryL11,
    },
    // {
    //   avatar: gallaryL12,
    // },
    {
      avatar: gallaryL13,
    },
    // {
    //   avatar: gallaryL14,
    // },
    // {
    //   avatar: gallaryL15,
    // },
    // {
    //   avatar: gallaryL16,
    // },
    {
      avatar: gallaryL17,
    },
    // {
    //   avatar: gallaryL18,
    // },
    {
      avatar: gallaryL19,
    },
  ];

  return (
    <section id="testimonials">
      <h5>My Students</h5>
      <h2>Gallary</h2>
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
