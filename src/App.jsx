import { Fragment } from "react";
import Intro from "./pages/home/intro";
import About from "./pages/home/about";

function App() {
  return (
    <Fragment>
      <div className="scroll-container">
        <Intro></Intro>
        <About></About>
      </div>
    </Fragment>
  );
}

export default App;
