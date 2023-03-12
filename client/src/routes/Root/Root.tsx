import {Link, Outlet, useLocation} from 'react-router-dom'
import React from "react";
import {Layout} from "./components/Layout/Layout";
import {Header} from "components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {ButtonCoverEffect} from "../../ui-lib-components/Button";
import {allowedCoverEffectFrom} from "../../ui-lib-components/Button/Button";

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
    const isNotRootRoute = useLocation().pathname !== '/'
    return (
        <Layout
            header={<Header />}
            main={isNotRootRoute ? <Outlet /> : (
                <Link to="games">
                    <ButtonCoverEffect coverEffectFrom={allowedCoverEffectFrom.right}>Explore Games Now</ButtonCoverEffect>
                </Link>
            )}
            footer={<Footer />}
        />
    )
}