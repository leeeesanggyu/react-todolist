import React, {PropsWithChildren, useEffect, useState} from "react";

type Props = {
    deleteTodo: ()=>void;
}

export default function DeleteButton({deleteTodo}:Props) {
    const onClick = () => {
        alert("삭제됨 ㅎ")
        deleteTodo();
    }

    return (
        <span>
            <button onClick={() => onClick()}>Delete</button>
        </span>
    );
}