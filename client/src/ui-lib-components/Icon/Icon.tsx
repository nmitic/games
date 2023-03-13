import { ReactComponent as MenuIcon } from './assets/menu-icon.svg'
import { ReactComponent as CloseIcon } from './assets/close-icon.svg'
import { ReactComponent as LikeIcon } from './assets/like.svg'
import style from './Icon.module.css'
import React from "react";
export enum allowedIcons {
    menu = "menu",
    close = 'close',
    like = 'like'
}

export enum allowedSizes {
    S = "S",
    M = 'M',
    L = "L"
}

export enum allowedColor {
    black = "black",
    white = 'white',
    blue = "blue",
    orange = "orange",
    gold = "gold"
}

const sizeToClassNameMap = {
     [allowedSizes.S]: style.iconS,
     [allowedSizes.M]: style.iconM,
     [allowedSizes.L]: style.iconL,
 }

const colorToClassNameMap = {
    [allowedColor.black]: style.iconBlack,
    [allowedColor.blue]: style.iconBlue,
    [allowedColor.orange]: style.iconOrange,
    [allowedColor.gold]: style.iconGold,
    [allowedColor.white]: style.iconWhite
}

const iconNameToSvgMap = {
    [allowedIcons.menu]: MenuIcon,
    [allowedIcons.close]: CloseIcon,
    [allowedIcons.like]: LikeIcon
}

type IconProps = {
    iconName: allowedIcons,
    color?: allowedColor,
    size?: allowedSizes,
    innerRef?: React.RefObject<SVGSVGElement>,
    [x:string]: any
}


const Icon:React.FC<IconProps> = ({innerRef, iconName, color = allowedColor.black, size = allowedSizes.M, rest}) => {
    const classNames =
        `${style.icon} ${rest?.className ? rest?.className : ''} ${sizeToClassNameMap[size]} ${colorToClassNameMap[color]} `
    const IconToRender = iconNameToSvgMap[iconName]

    return <IconToRender className={classNames} ref={innerRef} {...rest}/>
}

export default Icon