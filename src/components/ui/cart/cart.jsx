import { useContext } from "react";

import classes from "./cart.module.css";
import Modal from "../modal";
import CartContext from "../../../store/cartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li className={classes["cart-item"]}>
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.hideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.hideCartHandler}>
          Close
        </button>
        {cartCtx.items.length > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
