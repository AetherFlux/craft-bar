import classes from "./order.module.css";
import OrderCard from "../../components/ui/orderCard";
import { Fragment } from "react";

const DUMMY_ITEMS = [
    {
        id: 'i1',
        title: 'Big Burger',
        price: 8,
        description: 'The biggest burger we have',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80',
    },
    {
        id: 'i2',
        title: 'Small Burger',
        price: 2,
        description: 'The smallest burger we have',
        image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2230&q=80',
    },
    {
        id: 'i3',
        title: 'Medium Burger',
        price: 5,
        description: 'A regular burger',
        image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2136&q=80',
    },
    {
        id: 'i4',
        title: 'Black Burger',
        price: 15,
        description: 'A very dark burger',
        image: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80',
    },
]

const Order = (props) => {
  return (
    <Fragment>
      <section className={classes["order-section"]}>
        {DUMMY_ITEMS.map((item) => (
          <OrderCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </section>
    </Fragment>
  );
};

export default Order;
