import React, {PropsWithChildren} from "react";
import * as STC from './Container.style';

type Props = PropsWithChildren<{

}>

export default function Container({children} :Props) {
    return (
        <STC.Container>
            {children}
        </STC.Container>
    );
}