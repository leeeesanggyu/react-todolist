import React from 'react';

function Header() {
    return <header>
        <h2>안녕하세요, 이상규의 투두리스트 입니다.</h2>
    </header>
}

function Main() {
    return <nav>
        <p><a href="/">메인 이동 샤샥</a></p>
    </nav>
}

function Post() {
    return <article>
        <li><a href="/post/1">게시물 1</a></li>
        <li><a href="/post/2">게시물 2</a></li>
    </article>
}

function App() {
  return (
    <div>
        <Header></Header>
        <Main></Main>
        <Post></Post>
    </div>
  );
}

export default App;
