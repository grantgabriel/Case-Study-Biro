import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import NewsList from '../components/NewsList';

function Dashboard() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        console.log("testing", window.articlesData)

        if (window.articlesData) {
            setArticles(window.articlesData);
        }
    }, []);

    return (
        <>
            <Banner
                title="Dashboard Berita SDGs"
            />
            <NewsList
                data={articles}
                dashboard="on"
            />
        </>
    );
}

export default Dashboard;
