import classes from "./cart.module.css"
import Modal from "../modal"

const Cart = props => {
    const cartItems = (<ul className={classes["cart-items"]}>{[{
        id: "i1",
        title: "Big Burger",
        price: 8,
        description: "The biggest burger we have",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80",
      }].map(item => <li className={classes["cart-item"]}><span>{item.title}</span><span>${item.price}</span></li>)}</ul>);

    return (
        <Modal onClose={props.hideCartHandler}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$8</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.hideCartHandler}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;