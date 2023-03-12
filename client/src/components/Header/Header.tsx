import {Nav} from "./components/Nav/Nav"
import Icon, {allowedIcons} from "ui-lib-components/Icon"
import style from './Header.module.css'
import React, {useState} from "react";
import Button from "ui-lib-components/Button";
import {allowedTypes} from "../../ui-lib-components/Button/Button";
import {allowedColor} from "../../ui-lib-components/Icon/Icon";
export const Header:React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const openMenu = () => setIsMenuOpen(true)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <div className={style.header}>
            <Button onClick={openMenu} >
                <Icon iconName={allowedIcons.menu} color={allowedColor.gold}/>
            </Button>

            <Nav
                isMenuOpen={isMenuOpen}
                closeMenu={closeMenu}
            />
        </div>
    )
}