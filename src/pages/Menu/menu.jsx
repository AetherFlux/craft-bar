import { Fragment } from "react";
import Banner from "./banner";
import FoodItems from "./foodItems";

const Menu = () => {
    return (
        <Fragment>
            <Banner></Banner>
            <FoodItems></FoodItems>
        </Fragment>
    )
}

export default Menu;