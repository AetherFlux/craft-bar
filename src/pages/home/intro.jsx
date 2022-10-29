import classes from "./intro.module.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <Fragment>
      <section className={`${classes.fitScreen} ${classes["intro-section"]}`}>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>Craft Bar</h1>
          <div className={classes.buttons}>
            <Link to="/menu">
              <button className={classes.button}>Menu</button>
            </Link>
            <Link to="/Order">
              <button className={classes.button}>Order</button>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
