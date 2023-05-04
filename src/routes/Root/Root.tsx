import {
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useOutletContext,
} from "react-router-dom";
import { useState } from "react";
import { Layout } from "./components/Layout/Layout";
import { Header } from "components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ButtonCoverEffect } from "../../ui-lib-components/Button";
import { allowedCoverEffectFrom } from "../../ui-lib-components/Button/Button";
import style from "./Root.module.css";
import Typography from "../../ui-lib-components/Typography";
import {
  allowedHtmlTag,
  allowedVariants,
} from "../../ui-lib-components/Typography/Typography";
import MOCK_DATA from "../../mock_data.json";

const fakeFetch = (fakeUrl: string): Promise<{ games: gamesDataType }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 2000);
  });
};

export type gameDataType = {
  name: string;
  short: string;
  url: string;
  tags: string;
  hasBoosters: boolean;
  liked?: boolean;
};

export type gamesDataType = gameDataType[];

type GamesContextType = {
  games: gamesDataType;
  addPortfolioGames: (gameToAdd: gameDataType) => gamesDataType;
  removePortfolioGames: (gameToRemove: gameDataType) => gamesDataType;
  searchGames: (dataSet: gamesDataType, searchTerm: string) => gamesDataType;
  portfolioGames: gamesDataType;
};

export const useGames = () => useOutletContext<GamesContextType>();

export const loader = async (): Promise<gamesDataType> => {
  const cachedGamesData = readDataFromBrowserStorage("games");

  if (cachedGamesData) {
    return cachedGamesData;
  }

  const response = await fakeFetch("http://localhost:12345/games.json");
  const { games } = response;

  const gamesState = games.map((game) => ({
    ...game,
    liked: false,
  }));

  persistDataIntoBrowserStorage(gamesState, "games");

  return gamesState;
};

const persistDataIntoBrowserStorage = (data: {}, key: string) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const readDataFromBrowserStorage = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.log(e);
  }
};

export const Root = () => {
  const isNotRootRoute = useLocation().pathname !== "/";
  const gamesData = useLoaderData() as gamesDataType;
  const [games, setGames] = useState<gamesDataType>(gamesData);

  const handleSetGames = (games: gamesDataType) => {
    setGames(games);
    persistDataIntoBrowserStorage(games, "games");
  };

  const addPortfolioGames = (gameToAdd: gameDataType) => {
    const gamesAfterAdding = games.map((game) => {
      if (game.name === gameToAdd.name) {
        game.liked = true;
      }

      return game;
    });

    handleSetGames(gamesAfterAdding);
  };

  const removePortfolioGames = (gameToAdd: gameDataType) => {
    const gamesAfterRemoval = games.map((game) => {
      if (game.name === gameToAdd.name) {
        game.liked = false;
      }

      return game;
    });
    handleSetGames(gamesAfterRemoval);
  };

  const searchGames = (dataSet: gamesDataType, searchTerm: string) => {
    return dataSet.filter((game: gameDataType) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const portfolioGames = games.filter((game) => game.liked);

  return (
    <Layout
      header={<Header />}
      main={
        isNotRootRoute ? (
          <Outlet
            context={{
              portfolioGames,
              games,
              addPortfolioGames,
              removePortfolioGames,
              searchGames,
            }}
          />
        ) : (
          <div className={style.root}>
            <Typography
              component={allowedHtmlTag.h1}
              variant={allowedVariants.h4}
            >
              Welcome to the most awesome but totally useless website where you
              can not really do much, just click here and there, but hey look at
              the navigation menu cool effects right? And how about this cool
              button hover effect?
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
        )
      }
      footer={<Footer />}
    />
  );
};
