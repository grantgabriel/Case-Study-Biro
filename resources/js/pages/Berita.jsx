import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import NewsList from '../components/NewsList';

function Berita() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        if (window.articlesData) {
            setArticles(window.articlesData);
        }
    }, []);

    return (
        <>
            <Banner />
            <NewsList data={articles} />
        </>
    );
}

export default Berita;
