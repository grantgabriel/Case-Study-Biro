function Pagination() {
    return (
        <div className="flex justify-center items-center gap-2 py-4 w-full h-[24px] lg:h-8 font-semibold text-[10px] text-hitam-usu lg:text-[14px] leading-[17px]">
            <div className="flex justify-center items-center gap-[10px] hover:bg-hijau-usu w-6 lg:w-8 h-6 lg:h-8 hover:text-white">&lt;</div>
            <div className="flex justify-center items-center gap-[10px] bg-hijau-usu hover:bg-hijau-usu w-6 lg:w-8 h-6 lg:h-8 text-white hover:text-white">1</div>
            <div className="flex justify-center items-center gap-[10px] hover:bg-hijau-usu w-6 lg:w-8 h-6 lg:h-8 hover:text-white">2</div>
            <div className="flex justify-center items-center gap-[10px] hover:bg-hijau-usu w-6 lg:w-8 h-6 lg:h-8 hover:text-white">3</div>
            <div className="flex justify-center items-center gap-[10px] hover:bg-hijau-usu w-6 lg:w-8 h-6 lg:h-8 hover:text-white">...</div>
            <div className="flex justify-center items-center gap-[10px] hover:bg-hijau-usu w-6 lg:w-8 h-6 lg:h-8 hover:text-white">299</div>
            <div className="flex justify-center items-center gap-[10px] bg-hijau-usu hover:bg-hijau-usu w-6 lg:w-8 h-6 lg:h-8 text-white hover:text-white">&gt;</div>
        </div>
    );
}

export default Pagination;
