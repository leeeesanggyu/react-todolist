import React from "react";
import {TopicType} from "./topicType";

type Props = {
    topic:Array<TopicType>
}

function Article(props: Props) {
    let articles = props.topic.map(t =>
        <li key={t.id}>{t.title}, {t.body}</li>
    );
    return <article>
        <ol>{articles}</ol>
    </article>
}

export default Article;