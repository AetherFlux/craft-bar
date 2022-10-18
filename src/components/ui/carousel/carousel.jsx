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
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        500: {slidesPerView : 2},
        992: {slidesPerView: 3}
      }}
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: true
      }}
      mousewheel={{
        releaseOnEdges: true
      }}
      className={classes.carousel}
    >
      {React.Children.map(props.children, child => <SwiperSlide className={classes.slide}>{child}</SwiperSlide>)}

    </Swiper>
  );
};

export default Carousel
