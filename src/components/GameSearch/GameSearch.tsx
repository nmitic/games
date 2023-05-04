import {ButtonCoverEffect} from "../../ui-lib-components/Button"
import style from './GameSearch.module.css'

type GameSearchProps = {
    onSearch: (searchTerm: string) => void
}

export const GameSearch:React.FC<GameSearchProps> = ({onSearch}) => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            searchTerm: {value: string}
        }
        const searchTerm = target.searchTerm.value;
        onSearch(searchTerm)
    }

    return (
        <form action="Games/components" onSubmit={(e) => handleSubmit(e)}>
            <input className={style.input} type="text" name="searchTerm"/>
            <ButtonCoverEffect type="submit">Search</ButtonCoverEffect>
        </form>
    )
}