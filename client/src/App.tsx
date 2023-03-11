import {router} from "./router";
import {RouterProvider} from "react-router-dom";
import {PortfolioProvider} from "./context/portoflioContext";

export const App = () => {
    return (
        <PortfolioProvider>
            <RouterProvider router={router}/>
        </PortfolioProvider>
    )
}