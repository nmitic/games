import {GameList} from "./components/GameList/GameList";
import {GameListItem} from "./components/game-list-item/GameListItem";
import {gamesDataType} from "../Root/Root";
import {useLoaderData} from "react-router-dom";
import {PortfolioContext, PortfolioContextType} from "../../context/portoflioContext";
import {useContext} from "react";

export const Games = () => {
    const gamesData = useLoaderData() as gamesDataType
    const {addPortfolioGames, removePortfolioGames} = useContext(PortfolioContext) as PortfolioContextType

    return (
        <GameList>
            {
                gamesData.length ? gamesData.map(data =>
                    <GameListItem
                        data={data}
                        addPortfolioGames={addPortfolioGames}
                        removePortfolioGames={removePortfolioGames}
                        key={data.short}
                    />
                ) : (
                    <p>no games found</p>
                )
            }
        </GameList>
    )
}