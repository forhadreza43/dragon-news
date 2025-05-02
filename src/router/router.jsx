import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout.jsx";
import Home from "../pages/Home.jsx";
import CategoryNews from "../components/CategoryNews/CategoryNews.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
      },
    ],
  },
  {
    path: "/auth",
    element: <h3>Auth</h3>,
  },
  {
    path: "/news",
    element: <h3>News</h3>,
  },
  {
    path: "/*",
    element: <h3>404</h3>,
  },
]);
