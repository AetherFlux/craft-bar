import { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
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

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

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

  //disable mobile scroll if drawer is open
  if (drawerOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <Fragment>
      <div className="scroll-container">
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
                <Order showCartHandler={showCartHandler}></Order>
                {cartOpen && <Cart hideCartHandler={hideCartHandler}></Cart>}
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
