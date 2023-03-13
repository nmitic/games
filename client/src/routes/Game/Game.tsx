import {useLocation} from "react-router-dom";
import Typography from "../../ui-lib-components/Typography";
import {allowedColors, allowedVariants} from "../../ui-lib-components/Typography/Typography";
import style from './Game.module.css'

export const Game = () => {
    const location = useLocation()
    const data = location.state?.data

    const screenshotUrl = `http://www.royalgames.com/images/games/${data.short}/dumps/screen_${data.short}.gif`
    const screenshotAltText = `screenshoot of the game called ${data.name}`

    return (
        <article>
            <Typography color={allowedColors.gold}>{data.name}</Typography>

            <Typography variant={allowedVariants.h3}>Screen shoot:</Typography>
            <img src={screenshotUrl} alt={screenshotAltText} />
            <Typography variant={allowedVariants.h3}>Game's meta data:</Typography>
            <pre className={style.metaData}>
                {`${JSON.stringify(data, null, 2)}`}
            </pre>
        </article>
    )
}