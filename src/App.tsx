import React from 'react';
import Header from './main/header'
import Main from './main/main'
import Post from "./main/post";
import Article from "./main/article";
import {TopicType} from "./main/topicType"

function App() {
    const topics: TopicType[] = [
        {id: 1, title: 'html', body: 'html is ...'},
        {id: 2, title: 'css', body: 'css is ...'},
        {id: 3, title: 'javascript', body: 'javascript is ...'}
    ]

  return (
    <div>
        <Header title="To-do list"></Header>
        <Main/>
        <Article topic={topics}/>
        <Post title="게시물"/>
    </div>
  );
}

export default App;
