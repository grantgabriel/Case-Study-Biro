import ShortNewsTag from './ShortNewsTag';
import Pagination from './Pagination';
import SearchNews from './SearchNews';
import berita1 from '../assets/berita-satu.png';
import berita2 from '../assets/berita-dua.png';

function NewsList() {
    return (
        <div className="flex flex-col gap-2 px-8 py-2">
            <SearchNews />
            {/* Contoh Berita */}
            <div className="flex justify-between items-start gap-4 lg:bg-background-gray-usu px-2 py-4 rounded-2xl">
                <div className='relative flex-shrink-0 w-[133px] lg:w-[194px]'>
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
                    <h2 className='font-semibold text-[12px] leading-[17px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <div className='flex items-end h-full font-medium text-[#8FA0B1] text-[6px] leading-4'>
                        <p>
                            12 Desember 2023
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-start gap-4 lg:bg-background-gray-usu px-2 py-4 rounded-2xl">
                <div className='relative flex-shrink-0 w-[133px] lg:w-[194px]'>
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
                    <h2 className='font-semibold text-[12px] leading-[17px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <div className='flex items-end h-full font-medium text-[#8FA0B1] text-[6px] leading-4'>
                        <p>
                            12 Desember 2023
                        </p>
                    </div>
                </div>
            </div>
            <Pagination />
        </div>
    );
}

export default NewsList;
