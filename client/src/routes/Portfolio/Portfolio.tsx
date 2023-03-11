import {useContext, useEffect, useState} from 'react';
import {PortfolioContext, PortfolioContextType} from "../../context/portoflioContext";
import {GameSearch} from "../Games/components/GameSearch";
import {GameList} from "../Games/components/GameList/GameList";
import {GameListItem} from "../Games/components/game-list-item/GameListItem";
import {gameDataType, gamesDataType} from "../Root/Root";


export const Portfolio = () => {
    const {portfolioGames, addPortfolioGames, removePortfolioGames, searchPortfolioGames} = useContext(PortfolioContext) as PortfolioContextType
    const [searchResults, setSearchResult] = useState<gamesDataType>([])

    useEffect(() => {
        setSearchResult(portfolioGames)
    }, [])


    const handleSearch = (searchTerm: string) => {
        const matches = searchPortfolioGames(searchTerm)

        setSearchResult(matches)
    }

    const handleAddPortfolioGames = (game:gameDataType) => {
        setSearchResult(addPortfolioGames(game))
    }

    const handleRemovePortfolioGames = (game:gameDataType) => {
        setSearchResult(removePortfolioGames(game))
    }

    return (
        <div>
            <GameSearch onSearch={(searchTerm) => handleSearch(searchTerm)}/>
            <GameList>
                {
                    searchResults.length && searchResults.map(data =>
                        <GameListItem
                            data={data}
                            addPortfolioGames={handleAddPortfolioGames}
                            removePortfolioGames={handleRemovePortfolioGames}
                            key={data.short}
                        />
                    )
                }
            </GameList>
        </div>
    )
}

