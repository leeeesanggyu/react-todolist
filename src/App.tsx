import React, {useState} from "react";
import Container from "./todo/Container";
import InputBox from "./todo/InputBox";
import TodoList from "./todo/TodoList";
import DeleteButton from "./todo/DeleteButton";
import {TodoItem} from "./todo/type/TodoItem";
import { v4 as uuidv4 } from 'uuid';

export default function App (){
    const [todoItemList,setTodoItemList] = useState<TodoItem[]>([]);

    const addTodo = (text: string) => {
        const newTodoItem: TodoItem = {
            id: uuidv4(),
            text,
            deleteFlag: false
        };
        setTodoItemList([...todoItemList, newTodoItem]);
    }

    const deleteFlagChange = (id: string) => {
        const index = todoItemList.findIndex(
            todo => todo.id === id
        );

        if (index !== -1) {
            const updatedList = [...todoItemList];

            updatedList[index] = {
                ...updatedList[index],
                deleteFlag: !updatedList[index].deleteFlag
            };

            setTodoItemList(updatedList);
        }
    }

    const deleteTodo = () => {
        const updatedList = todoItemList.filter(
            todoItem => !todoItem.deleteFlag
        );
        setTodoItemList(updatedList);
    }

    return (
        <Container>
            <InputBox addTodo={addTodo}/>
            <TodoList todoList={todoItemList} deleteFlagChange={deleteFlagChange}/>
            <DeleteButton deleteTodo={deleteTodo}/>
        </Container>
    );
}