import React, {PropsWithChildren, useEffect, useState} from "react";

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
        <span>
            <input value={text} onChange={(e) => onChange(e.target.value)}/>
            <button onClick={() => onClick()}>Enter</button>
        </span>
    );
}