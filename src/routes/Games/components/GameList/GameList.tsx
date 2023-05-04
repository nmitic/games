import React from "react"
import styles from './GameList.module.css'

type GameListProps = {
    children: React.ReactNode,
    loading?: boolean
}
export const GameList: React.FC<GameListProps> = ({children, loading}) => {
    return (
        <div className={styles.gameList}>
            {
                loading ? <h3>loading</h3> : children
            }
        </div>
    )
}