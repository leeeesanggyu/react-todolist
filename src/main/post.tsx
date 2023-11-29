import React from "react";

type PostProps = {
    title: string;
}

function Post(postProps: PostProps) {
    return <article>
        <h2>Post</h2>
        <li><a href="/post/1">{postProps.title} 1</a></li>
        <li><a href="/post/2">{postProps.title} 2</a></li>
    </article>
}

export default Post;