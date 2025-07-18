function NewsTag({ label }) {
    return (
        <div className="flex justify-start items-start pt-6 pl-8 w-auto">
            <div className="flex justify-center items-center gap-[10px] bg-[#39A9354D] mt-4 p-[6px] rounded w-auto">
                <p className="font-semibold text-[8px] text-hijau-usu lg:text-[10px] leading-[12.8px] lg:leading-4">
                    {label}
                </p>
            </div>
        </div>
    );
}

export default NewsTag;
