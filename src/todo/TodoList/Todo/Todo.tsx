import React, {useState} from "react";
import {TodoItem} from "../../type/TodoItem";

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
        cursor: 'pointer',
    };

    return (
        <div>
            <span onClick={handleClick} style={textStyle}>
                {props.todo.text}
            </span>
            <input
                onChange={() => props.deleteFlagChange(props.todo.id)}
                type="checkbox"
                checked={props.todo.deleteFlag}
            />
        </div>
    );
}