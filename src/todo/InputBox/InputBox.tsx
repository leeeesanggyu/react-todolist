import React, {useState} from "react";
import styles from "./InputBox.module.css";

type Props = {
    addTodo: (_: string) => void;
}

export default function InputBox({addTodo}:Props) {
    const [text, setText] = useState('');

    const onChange = (value:string) =>{
        setText(value);
    }

    const onClick = () => {
        addTodo(text);
        setText('');
    }

    return (
        <div className={styles.inputBoxEnter}>
            <input
                className={styles.inputBox}
                value={text}
                onChange={(e) => onChange(e.target.value)}
                placeholder='할 일을 입력해주세요.'
            />
            <button
                className={styles.enter}
                onClick={() => onClick()}
            >Enter</button>
        </div>
    );
}