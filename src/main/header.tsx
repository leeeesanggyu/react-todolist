import React from "react";

type HeaderProps = {
    title: string;
}

function Header(headerProps: HeaderProps) {
    return <header>
        <h2>{headerProps.title}</h2>
    </header>
}

export default Header;