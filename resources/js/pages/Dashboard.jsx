import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import NewsList from '../components/NewsList';

function Dashboard() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
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
                toggleCategories="off"
            />
        </>
    );
}

export default Dashboard;
