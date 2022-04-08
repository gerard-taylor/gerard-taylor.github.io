import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from '../App'
import DonutPage from "pages/Donut";

function Router () {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Donut" element={<DonutPage/>} />
    </Routes>
  );
}

export default Router;