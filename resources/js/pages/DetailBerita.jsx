import Breadcrumbs from "../components/Breadcrumbs";
import Banner from "../components/Banner";
import SocialMedia from "../components/SocialMedia";

function DetailBerita() {
    return (
        <>
            <div className="px-8 md:px-16">
                <div className="h-[104px] md:h-[110px]">
                </div>
                <Breadcrumbs />
            </div>
            <div>
                <Banner />
            </div>
            <div className="px-8 md:px-16">
                <SocialMedia />
            </div>
        </>
    );
}

export default DetailBerita;
