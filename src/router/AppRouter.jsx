import Layout from "../layouts/Layout";

import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home/Home";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/login";
import Tasks from "../pages/tasks/TaskList"

const children = [
    { element: <Home />,

     path: "/" },

     { element: <Register />,

      path: "/register" },

      { element: <Login />,

        path: "/login" },

        { element: <Tasks />,

            path: "/tasks" }
        


];


export const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "",
      errorElement: (
        <a href="/" className="text-center">
          This page does not exist
        </a>
      ),
      children,
    },
  ]);


