import {GameList} from "./components/GameList/GameList";
import {GameListItem} from "./components/game-list-item/GameListItem";
import {gameDataType, gamesDataType} from "../Root/Root";
import {useLoaderData} from "react-router-dom";
import {PortfolioContext, PortfolioContextType} from "../../context/portoflioContext";
import {useContext, useState} from "react";
import {GameSearch} from "../../components/GameSearch/GameSearch";

export const Games = () => {
    const gamesData = useLoaderData() as gamesDataType
    const {addPortfolioGames, removePortfolioGames} = useContext(PortfolioContext) as PortfolioContextType
    const [searchResults, setSearchResult] = useState<gamesDataType>(gamesData)

    const handleSearch = (searchTerm: string) => {
        const matches = gamesData.filter((game:gameDataType) =>
            game.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setSearchResult(matches)
    }

    return (
        <>
            <GameSearch onSearch={handleSearch}/>
            <GameList>
                {
                    searchResults.length ? searchResults.map(data =>
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
        </>
    )
}