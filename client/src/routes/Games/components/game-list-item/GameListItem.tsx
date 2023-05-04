import React from "react";
import { gameDataType } from "../../../Root/Root";
import style from "./GameListItem.module.css";
import { Link } from "react-router-dom";
import Typography from "ui-lib-components/Typography";
import { allowedColors } from "../../../../ui-lib-components/Typography/Typography";
import { LikedButton } from "../../../../components/LikeButton/LikedButton";

export type GameListItemProps = {
  data: gameDataType;
  addPortfolioGames: (game: gameDataType) => void;
  removePortfolioGames: (game: gameDataType) => void;
};
export const GameListItem: React.FC<GameListItemProps> = ({
  data,
  addPortfolioGames,
  removePortfolioGames,
}) => {
  const { name, short, liked } = data;
  const alt = `image game of ${name}`;
  const srcBig = `https://www.royalgames.com/images/games/${short}/tournamentPage/${short}_764x260.jpg`;
  const srcSmall = `https://www.royalgames.com/images/games/${short}/${short}_170x80.gif`;

  return (
    <article>
      <Link
        to={`${data.short}`}
        state={{ data }}
        className={style.gameListLink}
      >
        <Typography color={allowedColors.gold}>{name}</Typography>
        <picture className={style.gameListItemPicture}>
          <source media="(min-width: 400px)" srcSet={srcBig} />
          <img src={srcSmall} alt={alt} />
        </picture>
      </Link>
      <LikedButton
        isLiked={liked}
        onLike={() => addPortfolioGames(data)}
        onUnLike={() => removePortfolioGames(data)}
      />
    </article>
  );
};
