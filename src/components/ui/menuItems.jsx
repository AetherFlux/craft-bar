import { Fragment } from "react";

import classes from "./menuItems.module.css"

const MenuItems = (props) => {
  return (
    <Fragment>
      <div className={classes["menu-item"]}>
        <div>
          <span>{props.title}</span>
          <span className={classes["menu-item-price"]}>{props.price}</span>
        </div>
        <div>{props.description}</div>
      </div>
    </Fragment>
  );
};

export default MenuItems;
