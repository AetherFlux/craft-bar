import { Fragment } from "react";
import classes from "./banner.module.css"

const Banner = props => {
    return (
        <Fragment>
            <section className={classes["banner-section"]}>
                <div className={classes["image-container"]}></div>
            </section>
        </Fragment>
    );
}

export default Banner;