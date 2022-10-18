import { Fragment, useState, useEffect, useRef } from "react";
import classes from "./testimonials.module.css";
import Carousel from "../../components/ui/carousel/carousel";
import ReviewCard from "../../components/layout/reviewCard";
import face1 from "../../assets/face1.jpg";
import face2 from "../../assets/face2.jpg";
import face3 from "../../assets/face3.jpg";

const Testimonials = (props) => {
  //Handle visibility state of contents
  const [isVisible, setIsVisible] = useState(false);
  console.log(`testimonials ${isVisible}`);

  const testimonialsRef = useRef();
  useEffect(() => {
    //Check if carousel is in viewport
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
    observer.observe(testimonialsRef.current);
  }, []);

  return (
    <Fragment>
      <section
        className={`${classes.fitScreen} ${classes["testimonials-section"]}`}
      >
        <h1 className={`${classes["testimonials-title"]} ${isVisible ? classes["seen-h1"] : null}`} ref={testimonialsRef}>
          See what our costumers think
        </h1>
        <div className={`${classes["carousel-container"]} ${isVisible ? classes["seen-carousel"] : null}`}>
          <Carousel>
            <ReviewCard
              reviewImage={face1}
              reviewName={"River Johnson"}
              reviewText={
                "I absolutely adore this place, without a doubt the best burgers in town!"
              }
            />
            <ReviewCard
              reviewImage={face2}
              reviewName={"James Grey"}
              reviewText={"Great burgers, Great prices!"}
            />
            <ReviewCard
              reviewImage={face3}
              reviewName={"Bob Silver"}
              reviewText={
                "My favourite bar in town, do yourself a favour and visit if you havent tried their burgers yet."
              }
            />
          </Carousel>
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonials;
