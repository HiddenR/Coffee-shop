import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// link
import LandingPage from "./body/LandingPage";
import Menu from "./body/menu/Menu";
import Merchandise from "./body/menu/Merchandise";
import About from "./body/about/About";
import Navigation from "./navigation/Navigation";
import MenuList from "./menu/menuList";
// menu display
import "./App.css";
import { store } from "./store/index";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu/menuList" element={<MenuList />} />
          <Route path="" element={<Merchandise />} />
          <Route path="" element={<About />} />
          <Route path="*" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
