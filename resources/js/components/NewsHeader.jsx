function Banner({ title, publisher, published_date, thumbnail, thumbnail_caption }) {
    return (
        <>
            <div className="flex md:flex-row flex-col md:justify-start md:items-center gap-8 lg:gap-16 bg-background-gray-usu p-8 lg:px-[97px] lg:py-16 w-full md:h-[261px] lg:h-[469px] xl:h-[526px] font-sans text-text-gray-usu">
                <div className='md:w-1/2'>
                    <h1 className="pb-4 font-semibold text-[20px] text-hijau-usu lg:text-[32px]">{ title }</h1>
                    <div className="flex flex-row">
                        <div className="pr-6">
                            <p className="pb-1 text-[6px] lg:text-[8px]">Dipublish Pada</p>
                            <p className="font-semibold text-[8px] lg:text-[10px]">{ published_date }</p>
                        </div>
                        <div>
                            <p className="pb-1 text-[6px] lg:text-[8px]">Dipublish Oleh</p>
                            <p className="font-semibold text-[8px] lg:text-[10px]">{ publisher }</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start rounded-lg w-auto md:w-1/2 h-full'>
                    <div className='flex justify-start items-start rounded-lg w-full'>
                        <img src={ thumbnail } alt="USU with Gojek" className='rounded-lg w-full h-full object-contain' />
                    </div>
                    <div>
                        <p className="self-start mt-2 text-[6px] lg:text-[8px]">{ thumbnail_caption }</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Banner;
