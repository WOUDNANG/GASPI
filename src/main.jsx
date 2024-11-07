import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Apropos from "./routes/apropos/Apropos";
import "./index.css";
import Recrutements from "./routes/recrutements/Recrutements";
import Root from "./routes/route";
import Home from "./routes/Home/home";
import Programmes from "./routes/programmes/Programmes";
import Themes from "./routes/themes/Themes";
import Actualite from "./routes/actualites/Actualite";

// another approach is to be used!
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/programmes",
        element: <Programmes />,
      },
      {
        path: "/themes",
        element: <Themes />,
      },
      {
        path: "/actualites",
        element: <Actualite />,
      },
      
      {
        path: "/recrutements",
        element: <Recrutements />,
      },
      {
        path: "/apropos",
        element: <Apropos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
