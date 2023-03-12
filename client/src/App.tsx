import {router} from "./router";
import {RouterProvider} from "react-router-dom";
import {PortfolioProvider} from "./context/portoflioContext";
import './App.css'
export const App = () => {
    return (
        <PortfolioProvider>
            <RouterProvider router={router}/>
        </PortfolioProvider>
    )
}