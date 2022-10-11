import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./location.module.css";
import AnimatedLine from "../../components/layout/animatedLine";
import ContentWrapper from "../../components/wrappers/contentWrapper";

const Location = (props) => {
  //svg wavy line path
  const lineShape = `M170.400-0.303637L170.568 48.7971C170.568 48.7971 170.563 54.7441 179.203
    62.6558C183.287 66.3954 206.291 78.0957 205.2 92.0048C204.109 105.914 181.651 113.45 170.563
    118.057C159.476 122.665 130.364 133.459 132 148.187C133.636 162.914 161.307 173.692 170.563
    177.087C179.819 180.482 205.895 190.143 205.2 206.447C204.55 221.708 179.861 231.527 170.563
    235.8C161.266 240.073 132.044 250.266 132 266.765C131.956 283.264 159.78 295.173 170.563
    300.951C181.347 306.728 204.674 317.91 205.2 334.547C205.726 351.184 182.84 360.192 176.762
    367.707C170.542 375.398 170.493 388.099 170.493 388.099L170.65 453.427`;

  //Handle visibility state of contents
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);

  const locationRef = useRef();
  useEffect(() => {
    //Check if image is in viewport
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
    observer.observe(locationRef.current);
  }, []);

  return (
    <Fragment>
      <section
        className={`${classes.fitScreen} ${classes["location-section"]}`}
      >
        <div className={classes["image-layer"]}>
          <div className={classes["image-container"]}></div>
          <AnimatedLine
            isvisible={isVisible.toString()}
            lineshape={lineShape}
          />
        </div>
        <ContentWrapper>
          <div ref={locationRef} className={classes.text}>
            <h1 className={isVisible ? classes["seen-h1"] : null}>
              Dine in friendly soroundings
            </h1>
            <h2
              className={`${classes.subtext} ${
                isVisible ? classes["seen-h2"] : null
              }`}
            >
              Feel at home
            </h2>
            <p className={isVisible ? classes["seen-p"] : null}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </ContentWrapper>
      </section>
    </Fragment>
  );
};

export default Location;
