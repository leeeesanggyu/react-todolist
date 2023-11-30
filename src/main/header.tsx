import React from "react";

type Props = {
    title: string;
    onChangeMode(): void;
}

function Header(props: Props) {
    return <header>
        <h2
            onClick={(event) :void => {
                event.preventDefault();
                props.onChangeMode();}}
        >
            {props.title}
        </h2>
    </header>
}

export default Header;