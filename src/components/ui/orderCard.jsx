import { Fragment } from "react"
import classes from "./orderCard.module.css"

const OrderCard = props => {
    return(
        <Fragment>
            <div className={classes["order-card"]}>
                <img src={props.image} alt={props.title} className={classes["order-image"]}/>
                <div className={classes["card-details"]}>
                    <div className={classes["card-main-text"]}>
                        <h2 className={classes["card-title"]}>{props.title}</h2>
                        <h2 className={classes["card-price"]}>${props.price}</h2>
                    </div>
                    <p className={classes["card-description"]}>{props.description}</p>
                    <div className={classes["card-buttons"]}>
                        <button>More info</button>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default OrderCard;