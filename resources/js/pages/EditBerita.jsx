import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import NewsForm from '../components/NewsForm';

function EditBerita() {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        if (window.articleData) {
            setArticle(window.articleData);
        }
    }, []);

    return (
        <>
            <Banner
                title="Edit Berita SDGs"
            />
            <NewsForm
                data={article}
                edit="true"
            />
        </>
    );
}

export default EditBerita;
