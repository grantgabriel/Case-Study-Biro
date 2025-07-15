function Breadcrumbs() {
    return (
        <nav className="flex flex-nowrap items-center space-x-1 h-[31px] md:h-[50px] font-sans font-semibold text-[8px] text-hijau-usu md:text-[12px] leading-[15px]">
            <span>🏠</span>
            <span>&gt;</span>
            <a href="#" className="hover:underline whitespace-nowrap">Activities</a>
            <span>&gt;</span>
            <a href="#" className="hover:underline whitespace-nowrap">Berita SDGs</a>
            <span>&gt;</span>
            <span className="truncate">USU's Effort to Encourage Student Digital Literacy by Cooperate with PT. Gojek</span>
        </nav>
    );
}

export default Breadcrumbs;
