import {Nav} from "./components/Nav/Nav"
import Icon, {allowedIcons} from "ui-lib-components/Icon"
import './Header.css'
import React, {useState, useRef} from "react";
import Button from "ui-lib-components/Button";
export const Header:React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const navRef = useRef(null)
    const openMenu = () => setIsMenuOpen(true)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <div className="header">
            <Button
                onClick={openMenu}
            >
                <Icon iconName={allowedIcons.menu} />
            </Button>
            <Nav
                isMenuOpen={isMenuOpen}
                closeMenu={closeMenu}
                innerRef={navRef}
            />
        </div>
    )
}