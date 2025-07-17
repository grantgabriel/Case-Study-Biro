function Pagination() {
    return (
        <div className="flex justify-center items-center py-4 w-full h-[24px] lg:h-8 font-semibold text-[#8FA0B1] text-[10px] lg:text-[14px] leading-[17px]">
            <div className="gap-[10px] w-6 lg:w-8 h-6 lg:h-8">&lt;</div>
            <div className="gap-[10px] w-6 lg:w-8 h-6 lg:h-8 text-hitam-usu">1</div>
            <div className="gap-[10px] w-6 lg:w-8 h-6 lg:h-8">2</div>
            <div className="gap-[10px] w-6 lg:w-8 h-6 lg:h-8">3</div>
            <div className="gap-[10px] w-6 lg:w-8 h-6 lg:h-8">...</div>
            <div className="gap-[10px] w-6 lg:w-8 h-6 lg:h-8">299</div>
            <div className="gap-[10px] w-6 lg:w-8 h-6 lg:h-8 text-hitam-usu">&gt;</div>
        </div>
    );
}

export default Pagination;
