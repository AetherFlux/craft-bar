import classes from "./cartItem.module.css"

const CartItem = props => {
    return (
        <li className={classes["cart-item"]}>
            <div>
                <h2 className={classes["item-name"]}>{props.name}</h2>
                <div className={classes.values}>
                    <span className={classes.price}>{`$${props.price}`}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.buttons}>
                <button>-</button>
                <button>+</button>
            </div>
        </li>
    )
}

export default CartItem;