import { Fragment } from "react";
import { useContext } from "react";

import classes from "./orderCard.module.css";
import CartContext from "../../store/cartContext";

const OrderCard = (props) => {
  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();

    cartCtx.addItem({
      id: props.id,
      name: props.title,
      price: props.price,
      amount: 1,
    });
  };

  return (
    <Fragment>
      <form className={classes["order-card"]} onSubmit={submitHandler}>
        <img
          src={props.image}
          alt={props.title}
          className={classes["order-image"]}
        />
        <div className={classes["card-details"]}>
          <div className={classes["card-main-text"]}>
            <h2 className={classes["card-title"]}>{props.title}</h2>
            <h2 className={classes["card-price"]}>${props.price}</h2>
          </div>
          <p className={classes["card-description"]}>{props.description}</p>
          <div className={classes["card-buttons"]}>
            <button
              type="button"
              onClick={() => {
                props.showFoodInfoHandler();
                props.setFoodInfo(() => ({
                  foodTitle: props.title,
                  foodInfo: props.info,
                }));
              }}
            >
              More info
            </button>
            <button type="submit">Add To Cart</button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default OrderCard;
