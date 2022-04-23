import React, { FC } from "react";
import {
  BrowserRouter, Route, RouteObject, Routes
} from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader";
import RouteConstants from "../contants/RouteConstants";

const Home = React.lazy(() => import("../pages/home/Home"));

/* holds all routes of the application */
const routes: RouteObject[] = [
  { path: RouteConstants.Root, element: <Home /> },
];
const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<SuspenseLoader />}>
        <Routes>
            <Route index element={<Home />} />
            {routes.map((route: RouteObject, index: number) => (
              <Route path={route.path} element={route.element} key={index} />
            ))}
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
