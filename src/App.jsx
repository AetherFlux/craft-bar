import { Fragment } from "react";
import Intro from "./pages/home/intro";
import About from "./pages/home/about";
import Location from "./pages/home/location";

function App() {
  return (
    <Fragment>
      <div className="scroll-container">
        <Intro></Intro>
        <About></About>
        <Location></Location>
      </div>
    </Fragment>
  );
}

export default App;
