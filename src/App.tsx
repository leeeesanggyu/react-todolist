import React from 'react';
import Header from './main/header'
import Main from './main/main'
import Post from "./main/post";
import Article from "./main/article";
import {TopicType} from "./main/topicType"
import {useState} from 'react'

function App() {
    const topics: TopicType[] = [
        {id: 1, title: 'html', body: 'html is ...'},
        {id: 2, title: 'css', body: 'css is ...'},
        {id: 3, title: 'javascript', body: 'javascript is ...'}
    ]

    const [mode, setMode] = useState('A');

    let content: any
    if (mode === 'A') {
        content = <Post title="게시물"
                        onChangeMode={(id: number): void => alert(id)}/>
    } else {
        content = <h2>WELCOME</h2>
    }

    return (
        <div>
            <Header title="To-do list"
                onChangeMode={(): void => alert("안녕하세요?")}></Header>
            <nav>
                <p onClick={
                    () => {
                        if (mode === 'B') {
                            setMode('A')
                        } else {
                            setMode('B')
                        }
                    }
                }>히든 메뉴 샤샥</p>
            </nav>
            <Article topic={topics}/>
            {content}
        </div>
    );
}

export default App;
