import CartIcon from "../../assets/cartIcon";
import classes from "./cartButton.module.css"

const CartButton = (props) => {
    return (
        <button className={classes["cart-button"]} onClick={props.showCartHandler}>
            <span className={classes["cart-icon"]}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes["cart-count"]}>3</span>
        </button>
    )
}

export default CartButton;