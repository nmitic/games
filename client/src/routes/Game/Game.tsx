import { useLocation } from "react-router-dom";
export const Game = () => {
    const location = useLocation()
    const data = location.state?.data

    return (
        <h2>{data.name}</h2>
    )
}