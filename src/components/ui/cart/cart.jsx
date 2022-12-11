import { useContext } from "react";

import classes from "./cart.module.css";
import Modal from "../modal";
import CartContext from "../../../store/cartContext";
import CartItem from "./cartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAddItem={addItemHandler.bind(null, item)}
          onRemoveItem={removeItemHandler.bind(null, item.id)}
        ></CartItem>
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
        {cartCtx.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
