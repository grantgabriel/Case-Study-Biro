import Banner from '../components/Banner';
import NewsForm from '../components/NewsForm';

function AddBerita() {
    return (
        <>
            <Banner
                title="Add Berita SDGs"
            />
            <NewsForm
                edit="false"
            />
        </>
    );
}

export default AddBerita;
