import React, {useState} from "react";
import {TodoItem} from "../../type/TodoItem";
import * as STC from './Todo.style';

type Props = {
    todo: TodoItem;
    deleteFlagChange: (_:string) => void;
}

export default function Todo(props: Props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const textStyle = {
        textDecoration: isClicked ? 'line-through' : 'none',
    };

    return (
        <div>
            <STC.Todo onClick={handleClick} style={textStyle}>
                {props.todo.text}
            </STC.Todo>
            <input
                onChange={() => props.deleteFlagChange(props.todo.id)}
                type="checkbox"
                checked={props.todo.checked}
            />
        </div>
    );
}