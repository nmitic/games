import React, {useEffect} from "react"
import {Link, useLocation} from "react-router-dom"
import Icon, {allowedIcons} from "ui-lib-components/Icon"
import './Nav.css'
import Button from "../../../../ui-lib-components/Button";

type NavProps = {
    isMenuOpen: Boolean,
    closeMenu: () => void,
    innerRef: React.RefObject<HTMLElement>
}

export const Nav:React.FC<NavProps> = ({isMenuOpen, closeMenu, innerRef}) => {
    const location = useLocation()
    const classNames = `nav ${isMenuOpen && 'nav-open'}`

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeMenu()
        }
    }

    useEffect(() => {
        closeMenu()
    }, [location])

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    return (
        <nav className={classNames} ref={innerRef}>
            <Button onClick={closeMenu}>
                <Icon iconName={allowedIcons.close} />
            </Button>
            <ul className="nav-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="games">Games Library</Link>
                </li>
                <li>
                    <Link to="portfolio">Games Portfolio</Link>
                </li>
            </ul>
            {isMenuOpen && <div className="nav-backdrop" onClick={closeMenu}/>}
        </nav>
    )
}