// Imports
import React, { useEffect, useState } from "react";
import classes from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// React Component
const CostumerFeedback = () => {
  // states and Effects
  const [feedback, setFeddback] = useState([]);
  const { sliderImg, sliderContainer, spanRole } = classes;
  const aborController = new AbortController();
  useEffect(() => {
    getProducts();
  }, []);
  // JS Functions
  const getProducts = () => {
    fetch("http://localhost:5000/CostumerFeedbacks", {
      signal: aborController.signal,
    })
      .then((res) => res.json())
      .then((data) => setFeddback(data))
      .catch((err) => console.log(err))
      .finally((deatail) => console.log(deatail));
    // Clean up funtion
    return () => {
      aborController.abort();
    };
  };
  // console.log(Swiper);
  return (
    <div
     
    >
      <h3 className="text-center mt-12 ">Costumers Feedbacks </h3>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {feedback.map((item) => {
          const { id, imgSrc, costumerName, role, title } = item;
          return (
            <SwiperSlide className="px-5 my-5" key={id}>
              <div className={`px-3 py-3 ${sliderContainer} `}>
                <div className="d-flex align-items-center gap-3 p-2">
                  <img
                    src={imgSrc}
                    alt="image could be shown !!!"
                    width={"100px"}
                    height={"100px"}
                    className={sliderImg}
                    loading="lazy"
                  />
                  <span>
                    <p className="fw-bold">{costumerName}</p>
                    <span className={`text-secondary ${spanRole}`}>{role}</span>
                  </span>
                </div>
                <div>{title}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CostumerFeedback;
