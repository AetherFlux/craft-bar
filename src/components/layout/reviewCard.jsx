import { Fragment } from "react"
import classes from "./reviewCard.module.css"

const ReviewCard = props => {
    return (
        <Fragment>
            <div className={classes["card-container"]}>
                <div className={classes["image-container"]}>
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
                </div>
                <div className={classes["text-container"]}>
                    <p className={classes.text}>This is a review of the burger place</p>
                    <h1>John doe</h1>
                </div>
            </div>
        </Fragment>
    )
}

export default ReviewCard;