import React from "react";

type Props = {
    title: string;
    onChangeMode: (id: any) => void;
}

function Post(props: Props) {
    return <article>
        <h2>Post</h2>
        <li>
            <a id="1" href="/post/1"
               onClick={(event) => {
                   event.preventDefault();
                   props.onChangeMode(event.currentTarget.id);
               }}>
                {props.title} 1
            </a>
        </li>
        <li>
            <a id="2" href="/post/2"
               onClick={(event) => {
                   event.preventDefault();
                   props.onChangeMode(event.currentTarget.id);
               }}>
                {props.title} 2
            </a>
        </li>
    </article>
}

export default Post;