import React from "react";
import { Autoplay, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import classes from "./carousel.module.css"

const Carousel = (props) => {
  return (
    <Swiper
      modules={[Autoplay, Mousewheel]}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        700: {slidesPerView : 2},
        1000: {slidesPerView: 3}
      }}
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: true
      }}
      mousewheel={{
        releaseOnEdges: true
      }}
      watchSlidesProgress={true}
      className={classes.carousel}
    >
      {React.Children.map(props.children, child => <SwiperSlide className={classes.slide}>{child}</SwiperSlide>)}

    </Swiper>
  );
};

export default Carousel
