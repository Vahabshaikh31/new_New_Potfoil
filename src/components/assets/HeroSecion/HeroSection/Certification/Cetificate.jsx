import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import './Certifiacte.css'
import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./index";

const ActiveSlider = () => {
  return (
    <div className="active-slider-container">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="swiper-container"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="slider-item">
              <div
                className="background-image"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="overlay" />
              <div className="content">
                <h1 className="title">{item.title}</h1>
                <p className="content-text">{item.content}</p>
              </div>
              <RxArrowTopRight className="arrow-icon" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
