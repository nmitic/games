import React from "react";
import './Layout.css'

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
        <div className="layout">
            <header className="header-layout-slot">{header}</header>
            <main className="main-layout-slot ">{main}</main>
            <footer className="footer-layout-slot">{footer}</footer>
        </div>
    )
}