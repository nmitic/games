import React from "react";
import style from './Layout.module.css'

type LayoutProps = {
    header: React.ReactNode,
    main: React.ReactNode,
    footer: React.ReactNode,
}
export const Layout:React.FC<LayoutProps> =
    ({
         header,
         main,
         footer
    }) => {
    return (
        <div className={style.layout}>
            <header className={style.headerLayoutSlot}>{header}</header>
            <main className={style.mainLayoutSlot}>{main}</main>
            <footer className={style.footerLayoutSlot}>{footer}</footer>
        </div>
    )
}