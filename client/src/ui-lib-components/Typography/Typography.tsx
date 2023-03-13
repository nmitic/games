import React from "react";
import style from './Typography.module.css'

export enum allowedVariants {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
    p = 'p'
}

export enum allowedHtmlTag {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
    p = 'p',
    span = 'span',
    div = 'div'
}

export enum allowedColors {
    black = 'black',
    white = 'white',
    gold = 'gold'
}

type TypographyProps = {
    children: React.ReactNode,
    variant?: allowedVariants,
    component?: allowedHtmlTag,
    color?: allowedColors
}

const colorToClassNameMap = {
    [allowedColors.black]: style.black,
    [allowedColors.white]: style.white,
    [allowedColors.gold]: style.gold,
}

const variantToClassNameMap = {
    [allowedVariants.h1]: style.h1,
    [allowedVariants.h2]: style.h2,
    [allowedVariants.h3]: style.h3,
    [allowedVariants.h4]: style.h4,
    [allowedVariants.h5]: style.h5,
    [allowedVariants.h6]: style.h6,
    [allowedVariants.p] : style.p
}

const Typography: React.FC<TypographyProps> =
    ({
         color = allowedColors.white,
         component = allowedHtmlTag.h1,
         variant = allowedVariants.h1,
         children
     }) => {

        const variantClassName = variantToClassNameMap[variant]
        const colorClassName = colorToClassNameMap[color]
        const className = `${variantClassName} ${colorClassName}`

        const HtmlTag = component

        return <HtmlTag className={className}>{children}</HtmlTag>
    }

export default Typography