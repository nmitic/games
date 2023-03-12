import style from "./Button.module.css"
import {ComponentPropsWithoutRef} from "react";

export enum allowedTypes {
    primary = 'primary',
}

const typeToClassNameMap = {
    [allowedTypes.primary]: style.primaryType,
}

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    styleType?: allowedTypes;
}

const Button = (props: ButtonProps) => {
    const { styleType, ...rest } = props;
    const styleTypeClassName = styleType ? typeToClassNameMap[styleType] : ''

    const className = `${style.button} ${rest.className} ${styleTypeClassName}`
    return <button {...rest} className={className} />;
}

export enum allowedCoverEffectFrom {
    top = 'top',
    right = 'right',
    bottom = 'bottom',
    left = 'left',
}

const coverEffectToClassNameMap = {
    [allowedCoverEffectFrom.top]: style.animationFromTop,
    [allowedCoverEffectFrom.right]: style.animationFromRight,
    [allowedCoverEffectFrom.bottom]: style.animationFromBottom,
    [allowedCoverEffectFrom.left]: style.animationFromLeft,
}

interface ButtonCoverEffectProps extends ComponentPropsWithoutRef<"button"> {
    coverEffectFrom?: allowedCoverEffectFrom,
}

export const ButtonCoverEffect:React.FC<ButtonCoverEffectProps & ButtonProps> = ({children, coverEffectFrom = allowedCoverEffectFrom.top, ...rest}) => {
    const animationClassName = coverEffectToClassNameMap[coverEffectFrom]

    return (
        <Button {...rest} className={`${style.buttonCoverEffect} ${animationClassName}`}>
            <span>{children}</span>
            <div className={style.coverEffectDynamic}>
                <span className={style.coverEffectDynamicInner}>{children}</span>
            </div>
        </Button>
    )
}

export default Button