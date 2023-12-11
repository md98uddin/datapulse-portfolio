import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { PageNotFound } from "./components/screens/PageNotFound";
import { AboutUs } from "./components/screens/AboutUs";
import { Pricing } from "./components/screens/Pricing";
import { Portfolio } from "./components/screens/Portfolio";
import { Services } from "./components/screens/Services";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  { path: "/services", element: <Services /> },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
