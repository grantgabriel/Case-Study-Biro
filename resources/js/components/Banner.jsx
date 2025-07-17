import bannerBerita from '../assets/banner-berita.png';

const Banner = () => {
    return (
        <div className="relative w-full h-[128px] md:h-[150px] lg:h-[250px] overflow-hidden">
            <img
                src={bannerBerita}
                alt="Banner Berita"
                className="right-0 absolute w-1/2 h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-[linear-gradient(89.93deg,#0B6839_15.94%,#038A47_34.45%,#39A935_50.77%,rgba(161,197,23,0)_72.6%)]"></div>

            <div className="z-10 relative flex flex-col justify-center items-start px-8 lg:px-16 2xl:pl-[224px] w-1/2 h-full">
                <div id="breadcrumbs" className="top-2 lg:top-4 right-8 lg:right-16 left-8 lg:left-16 2xl:left-[224px] absolute">
                    <nav className="flex flex-nowrap justify-start items-start space-x-1 py-2 w-full font-sans font-semibold text-[8px] text-white lg:text-[12px] leading-[15px]">
                        <span>🏠</span>
                        <span>&gt;</span>
                        <a href="#" className="hover:underline whitespace-nowrap">Activities</a>
                        <span>&gt;</span>
                        <a href="#" className="hover:underline whitespace-nowrap">Berita SDGs</a>
                    </nav>
                </div>
                <h1 className='font-bold text-[16px] text-white md:text-[24px] lg:text-[48px] leading-1'>
                    Berita SDGs
                </h1>
            </div>
        </div>
    );
};

export default Banner;
