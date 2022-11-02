import React from "react";
import "./Testmonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,nobis minus. Ut voluptatum eum deleniti, magni quo culpa totam  beatae nemo molestias reiciendis perferendis eaque doloribus aliquid! Ducimus, provident obcaecati!",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,nobis minus. Ut voluptatum eum deleniti, magni quo culpa totam  beatae nemo molestias reiciendis perferendis eaque doloribus aliquid! Ducimus, provident obcaecati!",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,nobis minus. Ut voluptatum eum deleniti, magni quo culpa totam  beatae nemo molestias reiciendis perferendis eaque doloribus aliquid! Ducimus, provident obcaecati!",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,nobis minus. Ut voluptatum eum deleniti, magni quo culpa totam  beatae nemo molestias reiciendis perferendis eaque doloribus aliquid! Ducimus, provident obcaecati!",
  },
];

const Testmonials = () => {
  return (
    <section id="testmonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testmonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testmonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testmonials;
