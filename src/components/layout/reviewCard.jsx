import { Fragment } from "react"
import classes from "./reviewCard.module.css"

const ReviewCard = props => {
    return (
        <Fragment>
            <div className={classes["card-container"]}>
                <div className={classes["image-container"]}>
                    <img src={props.reviewImage} alt="" />
                </div>
                <div className={classes["text-container"]}>
                    <p className={classes.text}>{props.reviewText.length > 100 ? `${props.reviewText.slice(0, 100)}...` : props.reviewText}</p>
                    <h1>{props.reviewName}</h1>
                </div>
            </div>
        </Fragment>
    )
}

export default ReviewCard;