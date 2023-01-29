import { createRoot } from "react-dom/client";

// Pages
import LandingPage from "./Routes/LandingPage";
import MainPage from "./Routes/MainPage";
import ErrorPage from "./Routes/ErrorPage";
import FakeShop from "./Routes/FakeShop";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage name="land prop" />,
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
  },
  {
    path: "/FakeShop",
    element: <FakeShop />,
    errorElement: <ErrorPage />,
  },
]);

const container = document.getElementById("root");
if (!container) {
  throw new Error("no container err");
}
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
