import { Fragment } from "react"
import classes from "./foodItems.module.css"

const FoodItems = props => {
    return(
        <Fragment>
            <section className={classes["food-section"]}>
                <div className={classes.menu}>

                </div>
            </section>
        </Fragment>
    );
};

export default FoodItems;