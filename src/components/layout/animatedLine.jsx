import { useState, useRef, useEffect } from "react";
import classes from "./animatedLine.module.css";

const AnimatedLine = (props) => {

    let isVisible = props.isvisible === "true" ? true : false;

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
          d={props.lineshape}
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
  );
};

export default AnimatedLine;
