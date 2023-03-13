import React, {useContext, useEffect, useState} from 'react';
import {PortfolioContext, PortfolioContextType} from "../../context/portoflioContext";
import {GameSearch} from "../../components/GameSearch/GameSearch";
import {GameList} from "../Games/components/GameList/GameList";
import {GameListItem} from "../Games/components/game-list-item/GameListItem";
import {gameDataType, gamesDataType} from "../Root/Root";
import Typography from "../../ui-lib-components/Typography";
import {allowedHtmlTag, allowedVariants} from "../../ui-lib-components/Typography/Typography";
import {Link} from "react-router-dom";


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
            {searchResults.length ? <GameSearch onSearch={(searchTerm) => handleSearch(searchTerm)}/> : null}
            {
                searchResults.length ? (
                    <GameList>
                        {
                            searchResults.map(data =>
                                <GameListItem
                                    data={data}
                                    addPortfolioGames={handleAddPortfolioGames}
                                    removePortfolioGames={handleRemovePortfolioGames}
                                    key={data.short}
                                />
                            )
                        }
                    </GameList>
                ) : (
                    <Typography
                        component={allowedHtmlTag.p}
                        variant={allowedVariants.p}
                    >
                        Add games to portfolio by <Link to="/games">exploring games</Link> and clicking the like button
                    </Typography>
                )
            }

        </div>
    )
}

