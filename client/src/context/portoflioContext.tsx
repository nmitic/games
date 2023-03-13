import React, {createContext, useState} from 'react';
import {gameDataType, gamesDataType} from "../routes/Root/Root";

export type PortfolioContextType = {
    portfolioGames: gamesDataType | [],
    addPortfolioGames: (gameToAdd: gameDataType) => gamesDataType,
    removePortfolioGames: (gameToRemove: gameDataType) => gamesDataType,
    searchPortfolioGames: (searchTerm: string) => gamesDataType
}
type PortfolioProviderProps = {
    children: React.ReactNode
}

export const PortfolioContext = createContext<PortfolioContextType | null>(null);

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({children}) => {
    const [portfolioGames, setPortfolioGames] = useState<gamesDataType | []>([])

    const addPortfolioGames = (gameToAdd:gameDataType) => {
        const matches = [gameToAdd, ...portfolioGames]
        setPortfolioGames([gameToAdd, ...portfolioGames])

        return matches
    }
    const removePortfolioGames = (gameToRemove:gameDataType) => {
        const matches = portfolioGames.filter(game => gameToRemove.name !== game.name)
        setPortfolioGames(portfolioGames.filter(game => gameToRemove.name !== game.name))

        return matches
    }

    const searchPortfolioGames = (searchTerm: string) => {
        return portfolioGames.filter((game:gameDataType) => game.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    return (
        <PortfolioContext.Provider value={{portfolioGames, addPortfolioGames, removePortfolioGames, searchPortfolioGames}}>
            {children}
        </PortfolioContext.Provider>
    )
}