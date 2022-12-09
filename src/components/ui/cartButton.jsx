import { useContext } from "react";

import CartIcon from "../../assets/cartIcon";
import CartContext from "../../store/cartContext";
import classes from "./cartButton.module.css"

const CartButton = (props) => {
    const cartCtx = useContext(CartContext);
    
    //Get number of items in cart crom cart context
    const cartCount = cartCtx.items.length

    return (
        <button className={classes["cart-button"]} onClick={props.showCartHandler}>
            <span className={classes["cart-icon"]}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes["cart-count"]}>{cartCount}</span>
        </button>
    )
}

export default CartButton;