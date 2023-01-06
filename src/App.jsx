import { Fragment, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Intro from "./pages/home/intro";
import About from "./pages/home/about";
import Location from "./pages/home/location";
import DrawerToggleButton from "./components/ui/drawer/drawerToggleButton";
import Drawer from "./components/ui/drawer/drawer";
import Ingredients from "./pages/home/ingredients";
import Testimonials from "./pages/home/testimonials";
import Footer from "./components/layout/footer";
import Order from "./pages/order/order";
import Cart from "./components/ui/cart/cart";
import CartProvider from "./store/cartProvider";
import Menu from "./pages/Menu/menu";
import FoodInfo from "./components/ui/foodInfo/foodInfo";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [{foodTitle, foodInfo}, setFoodInfo] = useState({
    foodTitle: "TestTitle",
    foodInfo: ""
  })
  const [foodInfoOpen, setFoodInfoOpen] = useState(false);

  const currPath = useLocation().pathname;

  const DrawerToggleHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const DrawerCloseHandler = () => {
    setDrawerOpen(false);
  };

  const showCartHandler = () => {
    setCartOpen(true);
  };

  const hideCartHandler = () => {
    setCartOpen(false);
  };

  const showFoodInfoHandler = () => {
    setFoodInfoOpen(true);
  }

  const hideFoodInfoHandler = () => {
    setFoodInfoOpen(false);
  }

  //disable mobile scroll if drawer is open
  if (drawerOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <Fragment>
      <div className={`${currPath === "/" ? "snapping" : null} scroll-container`}>
        <DrawerToggleButton
          drawerClickHandler={DrawerToggleHandler}
          drawerOpen={drawerOpen}
        ></DrawerToggleButton>
        <Drawer
          showDrawer={drawerOpen}
          drawerClickHandler={DrawerToggleHandler}
        ></Drawer>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Intro drawerCloseHandler={DrawerCloseHandler}></Intro>
                <About></About>
                <Location></Location>
                <Ingredients></Ingredients>
                <Testimonials></Testimonials>
              </Fragment>
            }
          />
          <Route
            path="/order"
            element={
              <CartProvider>
                <Order showCartHandler={showCartHandler} showFoodInfoHandler={showFoodInfoHandler} setFoodInfo={setFoodInfo}></Order>
                {cartOpen && <Cart hideCartHandler={hideCartHandler}></Cart>}
                {foodInfoOpen && <FoodInfo hideFoodInfoHandler={hideFoodInfoHandler} foodTitle={foodTitle} foodInfo={foodInfo}></FoodInfo>}
              </CartProvider>
            }
          />
          <Route
            path="/menu"
            element={
              <Fragment>
                <Menu></Menu>
              </Fragment>
            }
          />
        </Routes>
        <Footer></Footer>
      </div>
    </Fragment>
  );
}

export default App;
