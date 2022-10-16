import { Fragment, useState } from "react";
import Intro from "./pages/home/intro";
import About from "./pages/home/about";
import Location from "./pages/home/location";
import DrawerToggleButton from "./components/ui/drawer/drawerToggleButton";
import Drawer from "./components/ui/drawer/drawer";
import Ingredients from "./pages/home/ingredients";
import Testimonials from "./pages/home/testimodials";

function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const DrawerToggleHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  //disable mobile scroll if drawer is open
  if (drawerOpen) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "visible"
  }

  return (
    <Fragment>
      <div className="scroll-container">
        <DrawerToggleButton drawerClickHandler={DrawerToggleHandler} drawerOpen={drawerOpen}></DrawerToggleButton>
        <Drawer showDrawer={drawerOpen}></Drawer>
        <Intro></Intro>
        <About></About>
        <Location></Location>
        <Ingredients></Ingredients>
        <Testimonials></Testimonials>
      </div>
    </Fragment>
  );
}

export default App;
