import classes from "./intro.module.css"
import { Fragment } from "react";

const Intro = () => {
    return (
        <Fragment>
            <section className={`${classes.fitScreen} ${classes["intro-section"]}`}>
                <div className={classes.wrapper}>
                    <h1 className={classes.title}>Craft Bar</h1>
                    <div className={classes.buttons}>
                        <button className={classes.button}>Menu</button>
                        <button className={classes.button}>Order</button>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Intro;