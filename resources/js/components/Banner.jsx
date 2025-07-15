import bannerImage from '../assets/banner-detail-berita.png';

function Banner() {
    return (
        <div className="bg-background-gray-usu w-full">
            <div className="bg-background-gray-usu px-8 md:px-16 py-8 md:py-16 font-sans text-text-gray-usu">
                <h1 className="pb-4 font-semibold text-[20px] text-hijau-usu md:text-[32px]">USU's Effort to Encourage Student Digital Literacy by Cooperate with PT. Gojek</h1>
                <div className="flex flex-row pb-8">
                    <div className="pr-6">
                        <p className="text-[6px] md:text-[8px]">Dipublish Pada</p>
                        <p className="font-semibold text-[8px] md:text-[10px]">Selasa, 31 Februari 2024</p>
                    </div>
                    <div>
                        <p className="text-[6px] md:text-[8px]">Dipublish Oleh</p>
                        <p className="font-semibold text-[8px] md:text-[10px]">Lorem Ipsum Dolor Sit</p>
                    </div>
                </div>
                <div>
                    <img src={bannerImage} alt="USU with Gojek" />
                    <p className="mt-2 text-[6px] md:text-[8px]">Foto Bersama Lorem Ipsum Dolor Sit Amer</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
