import { Fragment } from "react";
import { useState } from "react";

import classes from "./foodItems.module.css";
import MenuItems from "../../components/ui/menuItems";

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
  {
    id: "d1",
    title: "Strawberry Cheesecake",
    category: "Desserts",
    price: 5,
    description: "Amazingly sweet and delicious",
    image:
      "https://images.unsplash.com/photo-1631206616601-79af875341d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80",
  },
  {
    id: "dr1",
    title: "Coca Cola",
    category: "Drinks",
    price: 1,
    description: "The classic",
    image:
      "https://images.unsplash.com/photo-1561758033-48d52648ae8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    id: "sp1",
    title: "Ahi Tuna",
    category: "Specials",
    price: 10.5,
    description: "Seared to perfection",
    image:
      "https://images.unsplash.com/photo-1626056087728-05c3d180911a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1001&q=80",
  },
];

const FoodItems = (props) => {
  const [sectionShown, setSectionShown] = useState("All");

  const sectionShownHandler = (item) => {
    setSectionShown(item);
  };
  return (
    <Fragment>
      <section className={classes["food-section"]}>
        <div className={classes.menu}>
          <div className={classes.intro}>
            <h1>CRAFT BAR MENU</h1>
            <p>
              Enjoy our selection of hand juicy hand crafted burgers, along with
              our world class fried and other specialties. All made with love
              from our world class team of chefs.
            </p>
            <div className={classes["sort-buttons"]}>
              <button onClick={sectionShownHandler.bind(null, "All")}>
                All
              </button>
              <button onClick={sectionShownHandler.bind(null, "Burgers")}>
                Burgers
              </button>
              <button onClick={sectionShownHandler.bind(null, "Sides")}>
                Sides
              </button>
              <button onClick={sectionShownHandler.bind(null, "Desserts")}>
                Desserts
              </button>
              <button onClick={sectionShownHandler.bind(null, "Drinks")}>
                Drinks
              </button>
              <button onClick={sectionShownHandler.bind(null, "Specials")}>
                Specials
              </button>
            </div>
          </div>
          <div className={classes["menu-categories"]}>
            {(sectionShown === "Burgers" || sectionShown === "All") && (
              <div className={classes["menu-burgers"]}>
                <h2>Artisan Burgers</h2>
                <div className={classes["menu-divider"]}>
                  <div className={classes["menu-burgers-image"]}></div>
                  <div className={classes["menu-items"]}>
                    {DUMMY_ITEMS.map(
                      (item) =>
                        item.category === "Burgers" && (
                          <MenuItems
                            title={item.title}
                            price={item.price}
                            description={item.description}
                          />
                        )
                    )}
                  </div>
                </div>
              </div>
            )}
            {(sectionShown === "Sides" || sectionShown === "All") && (
              <div className={classes["menu-sides"]}>
                <h2>Sides</h2>
                <div className={classes["menu-divider"]}>
                  <div className={classes["menu-items"]}>
                    {DUMMY_ITEMS.map(
                      (item) =>
                        item.category === "Sides" && (
                          <MenuItems
                            title={item.title}
                            price={item.price}
                            description={item.description}
                          />
                        )
                    )}
                  </div>
                </div>
              </div>
            )}
            {(sectionShown === "Desserts" || sectionShown === "All") && (
              <div className={classes["menu-desserts"]}>
                <h2>Desserts</h2>
                <div className={classes["menu-divider"]}>
                  <div className={classes["menu-desserts-image"]}></div>
                  <div className={classes["menu-items"]}>
                    {DUMMY_ITEMS.map(
                      (item) =>
                        item.category === "Desserts" && (
                          <MenuItems
                            title={item.title}
                            price={item.price}
                            description={item.description}
                          />
                        )
                    )}
                  </div>
                </div>
              </div>
            )}
            {(sectionShown === "Drinks" || sectionShown === "All") && (
              <div className={classes["menu-drinks"]}>
                <h2>Drinks</h2>
                <div className={classes["menu-divider"]}>
                  <div className={classes["menu-items"]}>
                    {DUMMY_ITEMS.map(
                      (item) =>
                        item.category === "Drinks" && (
                          <MenuItems
                            title={item.title}
                            price={item.price}
                            description={item.description}
                          />
                        )
                    )}
                  </div>
                </div>
              </div>
            )}
            {(sectionShown === "Specials" || sectionShown === "All") && (
              <div className={classes["menu-specials"]}>
                <h2>Specials</h2>
                <div className={classes["menu-divider"]}>
                  <div className={classes["menu-specials-image"]}></div>
                  <div className={classes["menu-items"]}>
                    {DUMMY_ITEMS.map(
                      (item) =>
                        item.category === "Specials" && (
                          <MenuItems
                            title={item.title}
                            price={item.price}
                            description={item.description}
                          />
                        )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FoodItems;
