
import "./App.css";
import Home from "./Home/Home";
import Nav from "./Nav/Nav";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./View/View";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Home />} exact />
      <Route  path="/view" element={<View />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
