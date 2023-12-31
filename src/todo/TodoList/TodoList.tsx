import React, {PropsWithChildren} from "react";
import Todo from "./Todo";
import {TodoItem} from "../type/TodoItem";

type Props = {
    todoList: TodoItem[];
    deleteFlagChange: (_:string) => void;
}

export default function TodoList(props: Props) {
    return (
        <div>
            {props.todoList.map((todo: TodoItem) =>
                <Todo
                    todo={todo}
                    deleteFlagChange={props.deleteFlagChange}
                />
            )}
        </div>
    );
}