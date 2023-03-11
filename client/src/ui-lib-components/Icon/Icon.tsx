import { ReactComponent as MenuIcon } from './assets/menu-icon.svg'
import { ReactComponent as CloseIcon } from './assets/close-icon.svg'
import './Icon.css'
import React from "react";
export enum allowedIcons {
    menu = "menu",
    close = 'close'
}

enum allowedSizes {
    S = "S",
    M = 'M',
    L = "L"
}

enum allowedColor {
    black = "black",
    blue = "blue",
    orange = "orange"
}

const sizeToClassNameMap = {
     [allowedSizes.S]: "icon-s",
     [allowedSizes.M]: "icon-m",
     [allowedSizes.L]: "icon-l",
 }

const colorToClassNameMap = {
    [allowedColor.black]: "icon-black",
    [allowedColor.blue]: "icon-blue",
    [allowedColor.orange]: "icon-orange",
}

const iconNameToSvgMap = {
    [allowedIcons.menu]: MenuIcon,
    [allowedIcons.close]: CloseIcon
}

type IconProps = {
    iconName: allowedIcons,
    color?: allowedColor,
    size?: allowedSizes,
    innerRef?: React.RefObject<SVGSVGElement>
}


const Icon:React.FC<IconProps> = ({innerRef, iconName, color = allowedColor.black, size = allowedSizes.M}) => {
    const classNames = `icon ${sizeToClassNameMap[size]} ${colorToClassNameMap[color]} `
    const IconToRender = iconNameToSvgMap[iconName]

    return <IconToRender className={classNames} ref={innerRef}/>
}

export default Icon