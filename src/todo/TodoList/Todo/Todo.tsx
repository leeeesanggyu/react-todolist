import React, {PropsWithChildren} from "react";
import {TodoItem} from "../../type/TodoItem";

type Props = {
    todo: TodoItem;
    deleteFlagChange: (_:string) => void;
}

export default function Todo(props: Props) {
    return (
        <div>
            {props.todo.text}
            <input
                onChange={() => props.deleteFlagChange(props.todo.id)}
                type="checkbox"
                checked={props.todo.deleteFlag}
            />
        </div>
    );
}