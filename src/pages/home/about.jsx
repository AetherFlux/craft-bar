import { Fragment, useState, useRef, useEffect } from "react";
import classes from "./about.module.css"

const About = props => {

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

    return (
        <Fragment>
            <section className={`${classes.fitScreen} ${classes["about-section"]}`}>
                <div className={classes["circle-container"]}>
                    <div ref={aboutRef} className={`${classes.circle} ${isVisible ? classes["seen-circle"] : null}`}></div>
                    
                </div>
            </section>
        </Fragment>
    );
}

export default About