import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from '../App'
import DonutPage from "pages/Donut";

const renderMultiRoutes = ({ element: Element, paths, ...rest }: MultiRoutes) =>
  paths.map((path) => <Route key={path} path={path} {...rest} element={Element} />);

function Router () {
  return (
    <Routes>
      {renderMultiRoutes({
        paths: ['/', '/portfolio/'],
        element: <Home />,
       })}
      {renderMultiRoutes({
        paths: ['/Donut', '/portfolio/Donut'],
        element: <DonutPage />,
       })}
    </Routes>
  );
}

export default Router;