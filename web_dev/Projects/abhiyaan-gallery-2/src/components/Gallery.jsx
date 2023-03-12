import React, { Suspense } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, EffectCoverflow } from "swiper";

import "./Gallery.css";
import "../components/Animations.css";
import Years from "../models/Years";
import Data from "../models/EventData";
const YearsPage = React.lazy(() => import("./YearsPage"));

export default function Gallery() {
  function imageEventHandler() {
    document.querySelector(".image-container").style.display = "block";
    document.querySelector(".swiper").style.display = "none";
  }
  return (
    <>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        direction={"horizontal"}
        mousewheel={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoHeight={true}
        modules={[Mousewheel, EffectCoverflow]}
        className="mySwiper"
      >
        {Years.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <div
                className="data"
                style={{ cursor: "pointer" }}
                onClick={() => imageEventHandler()}
              >
                <h2 className="year-heading">{Data[i].year}</h2>
                <p className="year-info">{Data[i].info}</p>
                <img src={image[i]} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <YearsPage />
    </>
  );
}

{
  /* <SwiperSlide>
  <div className="data" onClick={() => imageEventHandler()}>
    <h2 className="year-heading">{Data[1].year}</h2>
    <p className="year-info">{Data[1].info}</p>
    <img src={Years[1]} />
  </div>
</SwiperSlide>; */
}
