import React, {useState} from "react";
import Container from "./todo/Container";
import InputBox from "./todo/InputBox";
import TodoList from "./todo/TodoList";
import DeleteButton from "./todo/DeleteButton";
import {TodoItem} from "./todo/type/TodoItem";
import { v4 as uuidv4 } from 'uuid';
import {text} from "stream/consumers";

/**
 * LocalStorage에 저장해서 값 불러오기
 */
export default function App (){
    const [todoItemList,setTodoItemList] = useState<TodoItem[]>([]);

    const addTodo = (text: string) => {
        const newTodoItem: TodoItem = {
            id: uuidv4(),
            text,
            checked: false
        };
        setTodoItemList([...todoItemList, newTodoItem]);
    }

    const onCheckedChange = (id: string) => {
        const index = todoItemList.findIndex(
            todo => todo.id === id
        );

        if (index !== -1) {
            const updatedList = [...todoItemList];

            updatedList[index] = {
                ...updatedList[index],
                checked: !updatedList[index].checked
            };

            setTodoItemList(updatedList);
        }
    }

    const deleteTodo = () => {
        const updatedList = todoItemList.filter(
            todoItem => !todoItem.checked
        );
        setTodoItemList(updatedList);
    }

    return (
        <Container>
            <InputBox addTodo={addTodo}/>
            <DeleteButton deleteTodo={deleteTodo}/>
            <TodoList todoList={todoItemList} deleteFlagChange={onCheckedChange}/>
        </Container>
    );
}