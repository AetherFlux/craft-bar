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

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const DrawerToggleHandler = () => {
    setDrawerOpen(!drawerOpen);
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
          <Drawer showDrawer={drawerOpen}></Drawer>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Intro></Intro>
                <About></About>
                <Location></Location>
                <Ingredients></Ingredients>
                <Testimonials></Testimonials>
              </Fragment>
            }
          />
          <Route path="/test" element={<Testimonials></Testimonials>}/>
        </Routes>
        <Footer></Footer>
      </div>
    </Fragment>
  );
}

export default App;
