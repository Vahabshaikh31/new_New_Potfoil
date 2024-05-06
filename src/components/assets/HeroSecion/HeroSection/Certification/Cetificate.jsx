import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation"; // Importing the navigation CSS
import './Certifiacte.css'; // Importing your custom CSS
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./index";

const ActiveSlider = () => {
  return (
    <div className="active-slider-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 145,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 145,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="swiper-container"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title} className="cer-items">
            <a href={item.Link} target="vahab">
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
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
  