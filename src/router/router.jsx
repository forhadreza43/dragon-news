import { createBrowserRouter } from "react-router";
import CategoryNews from "../components/CategoryNews/CategoryNews.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import HomeLayout from "../layouts/HomeLayout.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import NewsDetails from "../pages/NewsDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

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
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/*",
    element: <h3>404</h3>,
  },
]);
