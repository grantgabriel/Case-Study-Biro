import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import NewsHeader from "../components/NewsHeader";
import Content from "../components/Content";
import OtherNews from "../components/OtherNews";

function DetailBerita() {
    const article = window.articleData;

    return (
        <>
            <Breadcrumbs title={article.title}/>
            <NewsHeader
                title={article.title}
                publisher={article.publisher}
                published_date={article.formatted_date}
                thumbnail={article.thumbnail}
                thumbnail_caption={article.thumbnail_caption}
            />
            <Content
                content={article.article}
                tag={article.tags}
            />
            <OtherNews />
        </>
    );
}

export default DetailBerita;
