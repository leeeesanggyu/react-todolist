import React from "react";
import {TopicType} from "./topicType";

type  ArticleProps = {
    topic:Array<TopicType>
}

function Article(topics: ArticleProps) {
    const topicData: any = [];
    topics.topic.forEach(t =>
        topicData.push(<li key={t.id}>{t.title}, {t.body}</li>)
    )

    return <article>
        <ol>{topicData}</ol>
    </article>
}

export default Article;