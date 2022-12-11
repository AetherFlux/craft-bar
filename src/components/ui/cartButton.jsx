import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";

import CartIcon from "../../assets/cartIcon";
import CartContext from "../../store/cartContext";
import classes from "./cartButton.module.css"

const CartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const [cartCountChange, setCartCountChange] = useState(false);
    
    //Get number of items in cart from cart context
    const cartCount = cartCtx.items.reduce((curNumber, item) => {
        return (
            curNumber + item.amount
        );
    }, 0);

    //Handle change of items in cart for playing animation.
    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setCartCountChange(true);

        const timer = setTimeout(() => {
            setCartCountChange(false);
        }, 300);

        return () => {
            clearTimeout(timer)
        };
    }, [cartCtx.items])

    return (
        <button className={`${classes["cart-button"]} ${cartCountChange ? classes.bump : null}`} onClick={props.showCartHandler}>
            <span className={classes["cart-icon"]}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes["cart-count"]}>{cartCount}</span>
        </button>
    )
}

export default CartButton;