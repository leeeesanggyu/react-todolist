import React, {useState} from "react";
import * as STC from './InputBox.style';

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
        <STC.Wrapper>
            <STC.Input
                value={text}
                onChange={(e) => onChange(e.target.value)}
                placeholder='할 일을 입력해주세요.'
            />
            <STC.Enter
                onClick={() => onClick()}
            >Enter</STC.Enter>
        </STC.Wrapper>
    );
}