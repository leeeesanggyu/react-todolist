import React, {PropsWithChildren} from "react";
import Todo from "./Todo";

type Props = {
    todoList: string[];
}

export default function TodoList({todoList}: Props) {
    return (
        <div>
            {todoList.map((todo: string) => <Todo todo={todo}/>)}
        </div>
    );
}