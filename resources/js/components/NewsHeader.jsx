function Banner({ title, publisher, published_date, thumbnail, thumbnail_caption }) {
    return (
        <>
            <div className="flex md:flex-row flex-col md:justify-start md:items-center gap-8 lg:gap-16 bg-background-gray-usu p-8 lg:px-[97px] lg:py-16 w-full md:h-[261px] lg:h-[469px] xl:h-[526px] font-sans text-text-gray-usu">
                <div className='md:w-1/2'>
                    <h1 className="pb-4 font-semibold text-[20px] text-hijau-usu lg:text-[32px]">{title}</h1>
                    <div className="flex flex-row">
                        <div className="pr-6">
                            <p className="pb-1 text-[6px] lg:text-[8px]">Dipublish Pada</p>
                            <p className="font-semibold text-[8px] lg:text-[10px]">{published_date}</p>
                        </div>
                        <div>
                            <p className="pb-1 text-[6px] lg:text-[8px]">Dipublish Oleh</p>
                            <p className="font-semibold text-[8px] lg:text-[10px]">{publisher}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center w-full md:w-1/2 max-w-full">
                    <div className="rounded-lg w-full overflow-hidden">
                        <img
                            src={thumbnail}
                            alt=""
                            className="rounded-lg w-full h-auto md:max-h-[200px] lg:max-h-[400px] object-cover"
                        />
                    </div>
                    {thumbnail_caption && (
                        <p className="mt-2 px-1 w-full text-[10px] text-gray-600 lg:text-[12px] text-left">
                            {thumbnail_caption}
                        </p>
                    )}
                </div>


            </div>
        </>
    );
}

export default Banner;
