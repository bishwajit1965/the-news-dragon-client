import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/home/category/Category";
import NewsLayout from "../layout/NewsLayout";
import LoginLayout from "../layout/LoginLayout";
import News from "../pages/news/news/News";
import About from "../pages/about/About";
import Career from "../pages/career/Career";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import TermsAndConditions from "../pages/termsAndConditions/TermsAndConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms-conditions",
        element: <TermsAndConditions />,
      },
    ],
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Category />,
        loader: () =>
          fetch(
            "https://the-news-dragon-server-paulbishwajit09-gmailcom.vercel.app/news"
          ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: (
          <PrivateRoute>
            <Career />
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-paulbishwajit09-gmailcom.vercel.app/categories/${params.id}`
          ),
      },
      {
        path: "/news",
        element: <NewsLayout />,
        children: [
          {
            path: ":id",
            element: <News />,
            loader: ({ params }) =>
              fetch(
                `https://the-news-dragon-server-paulbishwajit09-gmailcom.vercel.app/news/${params.id}`
              ),
          },
        ],
      },
    ],
  },
]);

export default router;
