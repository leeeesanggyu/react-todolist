import React, {useState} from "react";
import Container from "./todo/Container";
import InputBox from "./todo/InputBox";
import TodoList from "./todo/TodoList";

export default function App (){
    const [list,setList] = useState<string[]>([]);

    const addTodo = (text: string) =>{
        setList([...list, text]);
    }

    return (
        <Container>
            <InputBox addTodo={addTodo}/>
            <TodoList todoList={list}/>
        </Container>
    );
}