function OtherNews() {
    return (
        <div className="flex flex-col justify-center items-center bg-background-gray-usu mt-16 lg:px-16 text-text-gray-usu px:8">
            <div className="flex justify-center items-center lg:gap-4 w-full h-[41px] lg:h-[44px]">
                <p className="font-semibold text-[8px] text-text-gray-usu g:text-[10px]">
                    Find Other News
                </p>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-start w-full">
                <div className="gap-2 hover:bg-hijau-usu px-8 pt-4 pb-8 md:w-1/3 hover:text-white">
                    <p className="font-normal text-[8px] leading-4">
                        Internasional
                    </p>
                    <p className="font-light text-[14px] leading-[22.4px]">
                        Praesent at ultricies risus. Suspendisse potenti. Proin sit amet lorem rutrum lorem elementum interdum quis sit amet lectus.
                    </p>
                </div>
                <div className="gap-2 hover:bg-hijau-usu px-8 pt-4 pb-8 md:w-1/3 hover:text-white">
                    <p className="font-normal text-[8px] leading-4">
                        Internasional
                    </p>
                    <p className="font-light text-[14px] leading-[22.4px]">
                        Pellentesque gravida augue sit amet lectus hendrerit, non efficitur ante cursus.
                    </p>
                </div>
                <div className="gap-2 hover:bg-hijau-usu px-8 pt-4 pb-8 md:w-1/3 hover:text-white">
                    <p className="font-normal text-[8px] leading-4">
                        Internasional
                    </p>
                    <p className="font-light text-[14px] leading-[22.4px]">
                        Mauris iaculis libero ut ultricies venenatis. Mauris iaculis libero ut ultricies venenatis.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OtherNews;
