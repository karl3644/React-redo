import { createRoot } from "react-dom/client";

// Pages
import LoginPage from "./Routes/LoginPage";
import MainPage from "./Routes/MainPage";
import ErrorPage from "./Routes/ErrorPage";
import PetAdopt from "./Routes/PetAdopt";
import CRUD from "./Routes/CRUD";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Routes/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage name="land prop" />,
    errorElement: <ErrorPage />,
  },
  // can use global errorPage
  // {
  //   path: "*",
  //   element: <ErrorPage />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/Main",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Landing",
        element: <LandingPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "PetAdopt",
        element: <PetAdopt />,
        errorElement: <ErrorPage />,
      },
      {
        path: "CRUD",
        element: <CRUD />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const container = document.getElementById("root");
if (!container) {
  throw new Error("no container err");
}
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
