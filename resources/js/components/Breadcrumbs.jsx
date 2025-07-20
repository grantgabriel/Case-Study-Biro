function Breadcrumbs( { title } ) {
    return (
        <div className="px-8 lg:px-16 pt-[104px] lg:pt-[110px]">
            <nav className="flex flex-nowrap justify-start items-start space-x-1 w-full h-[31px] lg:h-[50px] font-sans font-semibold text-[8px] text-hijau-usu lg:text-[12px] leading-[15px]">
                <span>🏠</span>
                <span>&gt;</span>
                <a href="#" className="hover:underline whitespace-nowrap">Activities</a>
                <span>&gt;</span>
                <a href="#" className="hover:underline whitespace-nowrap">Berita SDGs</a>
                <span>&gt;</span>
                <span className="truncate">{ title }</span>
            </nav>
        </div>
    );
}

export default Breadcrumbs;
