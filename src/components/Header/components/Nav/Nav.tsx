import React, {useEffect} from "react"
import {NavLink, useLocation} from "react-router-dom"
import Icon, {allowedIcons} from "ui-lib-components/Icon"
import style from './Nav.module.css'
import Button from "../../../../ui-lib-components/Button"
import {createPortal} from "react-dom"
import {allowedColor, allowedSizes} from "../../../../ui-lib-components/Icon/Icon"

type NavProps = {
    isMenuOpen: Boolean,
    closeMenu: () => void,
}

export const Nav:React.FC<NavProps> = ({isMenuOpen, closeMenu}) => {
    const location = useLocation()
    const classNames = `${style.nav} ${isMenuOpen ? style.navOpen : ''}`
    const backdropClassNames = `${style.navBackdrop} ${isMenuOpen ? style.navBackdropOpen : ''}`
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
        <nav className={classNames}>
            <Button onClick={closeMenu} >
                <Icon
                    iconName={allowedIcons.close}
                    color={allowedColor.gold}
                />
            </Button>
            <ul className={style.navList}>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? style.navLinkActive : ''}>
                        <div className={`${style.navItem}`}>
                            <div className={style.navItemUpperPart} data-name="Home"></div>
                            <div className={style.navItemLowerPart} data-name="Home"></div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="games" className={({isActive}) => isActive ? style.navLinkActive : ''}>
                        <div className={style.navItem}>
                            <div className={style.navItemUpperPart} data-name="Games Library"></div>
                            <div className={style.navItemLowerPart} data-name="Games Library"></div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="portfolio" className={({isActive}) => isActive ? style.navLinkActive : ''}>
                        <div className={style.navItem}>
                            <div className={style.navItemUpperPart} data-name="Games Portfolio"></div>
                            <div className={style.navItemLowerPart} data-name="Games Portfolio"></div>
                        </div>
                    </NavLink>
                </li>
            </ul>
            {createPortal(
                <div className={backdropClassNames} onClick={closeMenu}/>,
                document.body
            )}
        </nav>
    )
}