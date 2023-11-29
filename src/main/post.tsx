import React from "react";

type Props = {
    title: string;
}

function Post(props: Props) {
    return <article>
        <h2>Post</h2>
        <li><a href="/post/1">{props.title} 1</a></li>
        <li><a href="/post/2">{props.title} 2</a></li>
    </article>
}

export default Post;