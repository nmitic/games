import React from "react";
import './GameList.css'

type GameListProps = {
    children: React.ReactNode,
    loading?: boolean
}
export const GameList: React.FC<GameListProps> = ({children, loading}) => {
    return (
        <div className="game-list">
            {
                loading ? <h3>loading</h3> : children
            }
        </div>
    )
}