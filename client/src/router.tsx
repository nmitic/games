import { createBrowserRouter } from "react-router-dom";
import { Root, loader as rootLoader } from "./routes/Root/Root";
import { Portfolio } from "./routes/Portfolio/Portfolio";
import { Game } from "./routes/Game/Game";
import { Games } from "./routes/Games/Games";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "/games-list",
        element: <Games />,
      },
      {
        path: "/games-list/:gameId",
        element: <Game />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);
