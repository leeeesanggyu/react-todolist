import React from "react";
import Todo from "./Todo";
import {TodoItem} from "../type/TodoItem";
import * as STC from './TodoList.style';

type Props = {
    todoList: TodoItem[];
    deleteFlagChange: (_:string) => void;
}

export default function TodoList(props: Props) {
    return (
        <STC.TodoList>
            {props.todoList.map((todo: TodoItem) =>
                <Todo
                    todo={todo}
                    deleteFlagChange={props.deleteFlagChange}
                />
            )}
        </STC.TodoList>
    );
}