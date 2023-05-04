import {GameList} from "./components/GameList/GameList"
import {GameListItem} from "./components/game-list-item/GameListItem"
import {gameDataType, gamesDataType, useGames} from "../Root/Root"
import {useState} from "react";
import {GameSearch} from "../../components/GameSearch/GameSearch"

export const Games = () => {
    const {games, addPortfolioGames, removePortfolioGames } = useGames()
    const [searchResults, setSearchResult] = useState<gamesDataType>(games)

    const handleSearch = (searchTerm: string) => {
        const matches = games.filter((game:gameDataType) =>
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