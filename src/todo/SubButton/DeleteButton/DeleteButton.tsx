import React, {PropsWithChildren, useEffect, useState} from "react";
import styles from "../SubButton.module.css";

type Props = {
    deleteTodo: ()=>void;
}

export default function DeleteButton({deleteTodo}:Props) {
    const onClick = () => {
        alert("삭제됨 ㅎ")
        deleteTodo();
    }

    return (
        <div>
            <button
                onClick={() => onClick()}
                className={styles.button}
            >Delete</button>
        </div>
    );
}