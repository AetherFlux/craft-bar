import { Fragment, useState, useRef, useEffect } from "react";
import classes from "./about.module.css";
import ContentWrapper from "../../components/wrappers/contentWrapper";

const About = (props) => {
  //Handle visibility state of contents
  const [isVisible, setIsVisible] = useState(false);

  const aboutRef = useRef();
  useEffect(() => {
    //check if image is in viewport
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
    observer.observe(aboutRef.current);
  }, []);

  const [pathLength, setPathLength] = useState();

  //Set lenght of svg line
  const pathRef = useRef();
  const lineRef = useRef();
  useEffect(() => {
    if (pathRef.current) {
      //Get length of line path
      setPathLength(pathRef.current.getTotalLength());
    }
    //Apply path length to svg css
    lineRef.current.style.setProperty("--path-length", pathLength);
  }, [pathRef, pathLength, lineRef]);

  return (
    <Fragment>
      <section className={`${classes.fitScreen} ${classes["about-section"]}`}>
        <div className={classes["circle-container"]}>
          <div
            ref={aboutRef}
            className={`${classes.circle} ${
              isVisible ? classes["seen-circle"] : null
            }`}
          ></div>
          <div className={classes["line-container"]}>
            <svg
              className={`${classes.line} ${
                isVisible
                  ? `${classes.animated} ${classes.visible}`
                  : `${classes.animated}`
              }`}
              viewBox="0 0 340.2 453.6"
              fill="none"
              preserveAspectRatio="xMidYMax meet"
              {...props}
              ref={lineRef}
            >
              <path
                d="M170.845 0.200972L170.588 162.191C170.588 162.191 170.947 165.501 167.542 166.41C167.542 166.41 121.342 170.453 113.628 196.631C113.628 196.631 109.952 209.022 120.101 216.039C120.101 216.039 163.482 214.871 169.075 215.047C169.075 215.047 153.639 197.485 174.477 178.285C195.046 159.334 235.415 169.827 237.461 192.333C238.632 205.211 231.796 205.02 225.508 211.955C219.219 218.891 225.34 224.444 230.499 223.55C237.234 222.382 244.299 219.03 239.333 212.975C234.367 206.921 222.598 212.014 216.109 216.285C210.267 220.129 208.357 225.765 202.91 224.907C198.752 224.253 194.473 216.634 189.227 215.717C183.982 214.799 180.157 217.417 176.445 222.643C172.733 227.87 170.474 229.073 166.105 227.515C161.736 225.956 158.779 218.148 152.134 219.291C145.488 220.433 144.979 226.004 139.598 228.667C134.218 231.329 130.453 228.118 126.672 224.232C122.892 220.347 115.025 220.127 112.623 228.083C110.221 236.039 101.609 234.8 99.2314 227.984C96.8541 221.168 106.618 213.605 110.098 218.252C113.578 222.899 109.646 235.179 110.928 239.24C112.211 243.301 114.612 245.868 123.696 243.717C132.781 241.567 182.778 231.197 188.033 231.12C188.033 231.12 193.277 230.095 193.632 232.2C193.988 234.306 192.133 237.031 193.527 238.917C195.311 241.331 198.458 239.634 198.93 237.469C199.402 235.303 196.725 231.959 197.568 230.521C198.411 229.084 204.067 227.705 206.392 229.037C208.717 230.369 208.982 231.185 209.258 233.061C209.69 236.008 206.982 240.569 209.357 243.081C211.732 245.593 216.481 244.257 216.801 240.968C217.12 237.68 213.285 233.353 213.513 230.978C213.742 228.603 215.635 227.827 217.48 227.471C219.325 227.115 232.817 226.622 236.324 230.059C239.831 233.495 238.945 241.417 232.121 245.045C225.297 248.672 216.745 248.905 176.684 243.758C176.684 243.758 143.403 241.95 136.417 247.859C136.417 247.859 133.741 249.764 134.402 253.209C135.062 256.653 138.171 262.185 135.429 263.831C132.687 265.477 130.17 264.363 129.659 261.191C129.32 259.087 131.434 253.954 129.814 252.444C128.194 250.934 124.148 251.99 120.268 256.308C120.268 256.308 118.346 258.387 116.931 261.28C115.591 264.022 114.02 275.103 117.949 281.514C121.877 287.924 133.302 287.103 138.325 286.523C143.347 285.942 220.27 280.43 229.683 278.831C239.096 277.233 239.932 266.575 239.304 263.734C239.304 263.734 239.055 254.807 228.327 253.097C218.938 251.599 162.338 252.255 150.459 257.09C137.622 262.315 140.813 270.119 151.184 271.804C162.432 273.632 170.095 270.002 170.402 291.333C170.48 296.74 170.416 453.543 170.416 453.543"
                fill="#f72020"
                fillOpacity="0"
                fillRule="nonzero"
                opacity="1"
                stroke="#e71a1a"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.995495"
                strokeWidth="2.01817"
                ref={pathRef}
              />
            </svg>
          </div>
        </div>
        <ContentWrapper>
          <div className={classes.text}>
            <h1 className={isVisible ? classes["seen-h1"] : null}>
              Perfecting Burgers
            </h1>
            <h2
              className={`${classes.subtext} ${
                isVisible ? classes["seen-h2"] : null
              }`}
            >
              Since 1973
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

export default About;
