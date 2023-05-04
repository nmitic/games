import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import "./App.css";

export const App = () => {
  return <RouterProvider router={router} />;
};
