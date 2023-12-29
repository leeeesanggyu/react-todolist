import React, {PropsWithChildren} from "react";

type Props = PropsWithChildren<{

}>

export default function Container({children} :Props) {
    return (
        <div style={{padding:20}}>
            {children}
        </div>
    );
}