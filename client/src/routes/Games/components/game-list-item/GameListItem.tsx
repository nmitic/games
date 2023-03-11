import React from "react";
import {gameDataType} from "../../../Root/Root";
import './GameListItem.css'
import {Link} from "react-router-dom";

export type GameListItemProps = {
    data: gameDataType,
    addPortfolioGames: (game: gameDataType) => void,
    removePortfolioGames: (game: gameDataType) => void,
}
export const GameListItem:React.FC<GameListItemProps> = ({data, addPortfolioGames, removePortfolioGames}) => {
    const {name, short} = data
    const alt = `image game of ${name}`
    const src = `http://www.royalgames.com/images/games/${short}/tournamentPage/${short}_764x260.jpg`

    return (
        <article>
            <Link
                to={`${data.short}`}
                state={{data}}
            >
                <h1>{name}</h1>
                <picture className="game-list-item-picture">
                    {/*<source media="(max-width: 799px)" srcSet="elva-480w-close-portrait.jpg"/>*/}
                    {/*<source media="(min-width: 800px)" srcSet="elva-800w.jpg"/>*/}
                    <img
                        src={src}
                        alt={alt}
                    />
                </picture>
            </Link>
            <button onClick={() => addPortfolioGames(data)}>Add game to portfolio</button>
            <button onClick={() => removePortfolioGames(data)}>Remove game from portfolio</button>
        </article>
    )
}