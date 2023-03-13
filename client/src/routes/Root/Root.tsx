import {Link, Outlet, useLocation} from 'react-router-dom'
import React from "react";
import {Layout} from "./components/Layout/Layout";
import {Header} from "components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {ButtonCoverEffect} from "../../ui-lib-components/Button";
import {allowedCoverEffectFrom} from "../../ui-lib-components/Button/Button";
import style from './Root.module.css';
import Typography from "../../ui-lib-components/Typography";
import {allowedHtmlTag, allowedVariants} from "../../ui-lib-components/Typography/Typography";

export type gameDataType = {
    name: string,
    short: string,
    url: string,
    tags: string,
    hasBoosters: boolean
}

export type gamesDataType = gameDataType[]

export const loader = async (): Promise<{ games: gamesDataType }> => {
    const response = await fetch('http://localhost:12345/games.json')
    const {games} = await response.json()

    return games
}

export const Root = () => {
    const isNotRootRoute = useLocation().pathname !== '/'
    return (
        <Layout
            header={<Header/>}
            main={isNotRootRoute ? <Outlet/> : (
                <div className={style.root}>
                    <Typography
                        component={allowedHtmlTag.h1}
                        variant={allowedVariants.h4}
                    >
                        Welcome to the most awesome but totally useless website where you can not really do much, just click here and there,
                        but hey look at the navigation menu cool effects right? And how about this cool button hover effect?
                    </Typography>
                    <Link to="games">
                        <ButtonCoverEffect
                            coverEffectFrom={allowedCoverEffectFrom.right}
                            className={style.exploreNowBtn}
                        >
                            Explore Games Now
                        </ButtonCoverEffect>
                    </Link>
                </div>
            )}
            footer={<Footer/>}
        />
    )
}