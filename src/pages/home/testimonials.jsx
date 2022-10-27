import { Fragment, useState, useEffect, useRef } from "react";
import classes from "./testimonials.module.css";
import Carousel from "../../components/ui/carousel/carousel";
import ReviewCard from "../../components/layout/reviewCard";
import AnimatedLine from "../../components/layout/animatedLine";
import face1 from "../../assets/face1.jpg";
import face2 from "../../assets/face2.jpg";
import face3 from "../../assets/face3.jpg";

const Testimonials = (props) => {
 const lineShape = `M 170.613 -0.303637 L 170.909 13.4976 C 170.909 13.4976 169.957 33.8456 194.504 35.5555 C 218.251 
  37.2097 212.148 10.9784 169.898 28.0839 C 129.304 44.5188 122.93 22.1731 137.692 19.9872 C 154.536 17.4932 172.614 
  35.7928 190.784 47.7435 C 202.715 55.5906 212.723 60.8724 225.391 58.7903 C 250.039 54.7391 233.206 30.5145 191.972
  42.484 C 185.557 44.3462 178.177 46.4425 169.898 49.4219 C 121.112 66.9778 100.365 47.6497 112.816 39.9166 C 130.52
  28.9206 157.797 46.5971 169.898 56.1979 C 180.215 64.384 188.042 72.5344 198.304 72.6865 C 218.586 72.9873 209.817
  47.3108 169.898 66.0544 C 161.98 69.7722 154.5 72.5321 149.192 73.8588 C 129.304 78.8291 123.253 64.1111 140.012
  62.4739 C 157.466 60.769 170.872 82.2034 170.872 82.2034 C 170.872 82.2034 178.653 70.9948 191.859 71.7802`;
  
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
        <div className={classes["line-layer"]}>
          <AnimatedLine
            isvisible={isVisible.toString()}
            lineshape={lineShape}
          />
        </div>
        <h1 className={`${classes["testimonials-title"]} ${isVisible ? classes["seen-h1"] : null}`} ref={testimonialsRef}>
          See what our customers think
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
