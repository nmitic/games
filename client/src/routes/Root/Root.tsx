import {Outlet} from 'react-router-dom'
import React from "react";
import {Layout} from "./components/Layout/Layout";
import {Header} from "components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

export type gameDataType = {
    name: string,
    short: string,
    url: string,
    tags: string,
    hasBoosters: boolean
}

export type gamesDataType = gameDataType[]

export const loader = async(): Promise<{games: gamesDataType}> => {
    const response = await fetch('http://localhost:12345/games.json')
    const {games} = await response.json()

    await new Promise((resolve => setTimeout(resolve, 500)))

    return games
}

export const Root = () => {
    return (
        <Layout
            header={<Header />}
            main={<Outlet />}
            footer={<Footer />}
        />
    )
}