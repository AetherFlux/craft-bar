import { Fragment } from "react";
import classes from "./drawerToggleButton.module.css";

const DrawerToggleButton = (props) => {
  return (
    <Fragment>
      <div className={classes["button-container"]}>
        <button className={classes["toggle-button"]} onClick={props.drawerClickHandler}>
          <div className={classes["line-1"]}></div>
          <div className={classes["line-2"]}></div>
          <div className={classes["line-3"]}></div>
        </button>
      </div>
    </Fragment>
  );
};

export default DrawerToggleButton;
