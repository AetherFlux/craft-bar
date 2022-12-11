import classes from "./order.module.css";
import OrderCard from "../../components/ui/orderCard";
import { Fragment } from "react";
import CartButton from "../../components/ui/cartButton";
import { useState } from "react";

const DUMMY_ITEMS = [
  {
    id: "b1",
    title: "Big Burger",
    category: "Burgers",
    price: 8,
    description: "The biggest burger we have",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80",
  },
  {
    id: "b2",
    title: "Small Burger",
    category: "Burgers",
    price: 2,
    description: "The smallest burger we have",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2230&q=80",
  },
  {
    id: "b3",
    title: "Medium Burger",
    category: "Burgers",
    price: 5,
    description: "A regular burger",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2136&q=80",
  },
  {
    id: "b4",
    title: "Black Burger",
    category: "Burgers",
    price: 15,
    description: "A very dark burger",
    image:
      "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80",
  },
  {
    id: "s1",
    title: "French Fires",
    category: "Sides",
    price: 3.5,
    description: "Perfectly crispy fries",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80",
  },
];

const Order = (props) => {
    const [itemsShown, setItemsShown] = useState("All");

    const itemsShownHandler = (item) => {
        setItemsShown(item);
    };

  return (
    <Fragment>
      <section className={classes["order-section"]}>
        <div className={classes["cart-container"]}>
          <CartButton showCartHandler={props.showCartHandler} />
        </div>
        <h1 className={classes["order-title"]}>ORDER</h1>
        <div className={classes["sort-buttons"]}>
          <button onClick={itemsShownHandler.bind(null, 'All')}>All</button>
          <button onClick={itemsShownHandler.bind(null, 'Burgers')}>Burgers</button>
          <button onClick={itemsShownHandler.bind(null, 'Sides')}>Sides</button>
          <button onClick={itemsShownHandler.bind(null, 'Desserts')}>Desserts</button>
          <button onClick={itemsShownHandler.bind(null, 'Drinks')}>Drinks</button>
          <button onClick={itemsShownHandler.bind(null, 'Specials')}>Specials</button>
        </div>
        <div className={classes["order-items"]}>
          {DUMMY_ITEMS.map(
            (item) =>
              (item.category === itemsShown || itemsShown === "All") && (
                <OrderCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                />
              )
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Order;
