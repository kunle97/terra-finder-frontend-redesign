import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import Nav from "./Nav/Nav";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Nav />
      <Home />
    </Fragment>
  );
}

export default App;
