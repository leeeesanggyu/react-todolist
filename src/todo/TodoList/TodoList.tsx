import React from "react";
import Todo from "./Todo";
import {TodoItem} from "../type/TodoItem";
import styles from "./TodoList.module.css";

type Props = {
    todoList: TodoItem[];
    deleteFlagChange: (_:string) => void;
}

export default function TodoList(props: Props) {
    return (
        <div className={styles.TodoList}>
            {props.todoList.map((todo: TodoItem) =>
                <Todo
                    todo={todo}
                    deleteFlagChange={props.deleteFlagChange}
                />
            )}
        </div>
    );
}