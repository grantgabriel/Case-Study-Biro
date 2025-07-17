import ShortNewsTag from './ShortNewsTag';
import Pagination from './Pagination';
import SearchNews from './SearchNews';
import Categories from './Categories';
import berita1 from '../assets/berita-satu.png';
import berita2 from '../assets/berita-dua.png';

function NewsList() {
    return (
        <div className="flex px-8 lg:px-16 2xl:px-[224px] py-2">
            <div className="flex flex-col gap-2 md:pr-8 lg:pr-16 w-full md:w-[70%] lg:w-3/4 xl:w-4/5">
                <SearchNews />
                {/* Contoh Berita */}
                <div className="flex justify-between items-start gap-4 lg:bg-background-gray-usu px-2 py-4 rounded-2xl">
                    <div className='relative flex flex-shrink-0 items-center'>
                        <img
                            src={berita2}
                            alt="Berita Thumbnail"
                            className="w-[133px] lg:w-[194px] object-contain"
                        />
                    </div>
                    <div className='flex flex-col justify-start gap-1 w-full h-full'>
                        <div className='flex gap-1'>
                            <ShortNewsTag label="TPB15 Ekonomi Darat" />
                        </div>
                        <h2 className='font-semibold text-[12px] text-hitam-usu lg:text-[16px] leading-[17px] lg:leading-5'>
                            Vestibulum libero odio, blandit non mauris nec, egestas venenatis purus.
                        </h2>
                        <div className="hidden md:flex flex-nowrap">
                            <p className="font-normal lg:font-normal text-[10px] text-text-gray-usu lg:text-[14px] line-clamp-1 lg:line-clamp-3 leading-4 lg:leading-[22.4px]">
                                Nulla blandit facilisis massa, eget scelerisque massa iaculis eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sagittis accumsan finibus. In dapibus risus consectetur eros porta suscipit sit amet ut metus. Nulla condimentum imperdiet egestas. Aliquam at placerat ligula, sit amet ultricies nunc. Morbi pulvinar eleifend odio. Mauris tempus, mauris vitae vehicula venenatis, risus nisi condimentum risus, a feugiat urna diam facilisis purus. Nulla commodo, tortor ut interdum lobortis, ligula massa facilisis quam, ut ultrices urna mi ut mi. Aliquam commodo ut nulla ut mollis. Vestibulum rhoncus purus nec mauris dapibus, sit amet malesuada nibh aliquam.
                            </p>
                        </div>
                        <div className='flex items-end h-full font-medium text-[#8FA0B1] text-[6px] leading-4'>
                            <p>
                                12 Desember 2023
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-start gap-4 lg:bg-background-gray-usu px-2 py-4 rounded-2xl">
                    <div className='relative flex flex-shrink-0 items-center'>
                        <img
                            src={berita1}
                            alt="Berita Thumbnail"
                            className="w-[133px] lg:w-[194px] object-contain"
                        />
                    </div>
                    <div className='flex flex-col justify-start gap-1 w-full h-full'>
                        <div className='flex gap-1'>
                            <ShortNewsTag label="TPB15 Ekonomi Darat" />
                            <ShortNewsTag label="TPB16 Mewing Sigma" />
                        </div>
                        <h2 className='font-semibold text-[12px] lg:text-[16px] leading-[17px] lg:leading-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h2>
                        <div className="hidden md:flex flex-nowrap">
                            <p className="font-normal lg:font-normal text-[10px] text-text-gray-usu lg:text-[14px] line-clamp-1 lg:line-clamp-3 leading-4 lg:leading-[22.4px]">
                                Nulla blandit facilisis massa, eget scelerisque massa iaculis eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sagittis accumsan finibus. In dapibus risus consectetur eros porta suscipit sit amet ut metus. Nulla condimentum imperdiet egestas. Aliquam at placerat ligula, sit amet ultricies nunc. Morbi pulvinar eleifend odio. Mauris tempus, mauris vitae vehicula venenatis, risus nisi condimentum risus, a feugiat urna diam facilisis purus. Nulla commodo, tortor ut interdum lobortis, ligula massa facilisis quam, ut ultrices urna mi ut mi. Aliquam commodo ut nulla ut mollis. Vestibulum rhoncus purus nec mauris dapibus, sit amet malesuada nibh aliquam.
                            </p>
                        </div>
                        <div className='flex items-end h-full font-medium text-[#8FA0B1] text-[6px] leading-4'>
                            <p>
                                12 Desember 2023
                            </p>
                        </div>
                    </div>
                </div>
                <Pagination />
            </div>
            <Categories />
        </div>
    );
}

export default NewsList;
