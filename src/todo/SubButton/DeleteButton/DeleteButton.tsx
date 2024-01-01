import React from "react";
import * as STC from '../SubButton.style';

type Props = {
    deleteTodo: ()=>void;
}

export default function DeleteButton({deleteTodo}:Props) {
    const onClick = () => {
        alert("삭제됨 ㅎ")
        deleteTodo();
    }

    return (
        <STC.Button
            onClick={() => onClick()}>
            Delete
        </STC.Button>
    );
}