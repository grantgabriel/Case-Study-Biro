import { useState } from 'react';


const SearchIcon = () => (
    <svg
        className="w-5 h-5 text-hijau-usu"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
    </svg>
);

function SearchNews() {
    const [selectedYear, setSelectedYear] = useState('2025');
    const [isOpen, setIsOpen] = useState(false);

    const years = ['2025', '2024', '2023'];

    const toggleDropdown = () => setIsOpen(!isOpen);
    const selectYear = (year) => {
        setSelectedYear(year);
        setIsOpen(false);
    };

    return (
        <div className="flex justify-center items-center py-8 h-[32px]">
            <form action="" className="flex justify-center md:justify-between items-center w-full">
                <div className="hidden md:flex flex-row items-center gap-2 lg:gap-4 h-full">
                    <div className="font-medium text-[12px] lg:text-[14px] leading-none lg:leading-[25.6px]">
                        Tahun Rilis
                    </div>
                    {/* Membuat dropdown tahun rilis (2025, 2024, 2023) */}
                    <div className="hidden md:block relative">
                        <div
                            onClick={toggleDropdown}
                            className="flex justify-between items-center gap-[2px] bg-[#39A9354D] p-2 rounded w-[64px] lg:w-[69px] h-[32px] cursor-pointer"
                        >
                            <div className="font-medium text-[#038A47] text-[12px] lg:text-[14px]">
                                {selectedYear}
                            </div>
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 9L12 15L18 9"
                                    stroke="#038A47"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        {isOpen && (
                            <div className="z-10 absolute bg-white shadow mt-1 border border-gray-300 rounded w-[64px] lg:w-[69px]">
                                {years.map((year) => (
                                    <div
                                        key={year}
                                        onClick={() => selectYear(year)}
                                        className="hover:bg-[#39A9351A] px-2 py-1 text-[#038A47] text-[12px] lg:text-[14px] cursor-pointer"
                                    >
                                        {year}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-between items-center gap-2 lg:gap-4 w-full md:w-[300px] lg:w-[422px] xl:w-[517px] h-full">
                    <div className="flex flex-row w-full h-full">
                        <div className="relative w-full h-[32px] font-sans font-bold text-[8px] text-hitam-usu lg:text-[10px] leading-[15px]">
                            <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                                <SearchIcon />
                            </div>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder="CARI DISINI"
                                className="bg-white pl-10 border border-[#A8A8A8] focus:border-transparent rounded focus:ring-hijau-usu w-full h-full text-hitam-usu text-right leading-[15px] transition-colors"
                            />
                        </div>
                    </div>
                    <div className="w-auto">
                        <button
                            type="submit"
                            className="bg-hijau-usu hover:bg-green-600 px-4 py-2 rounded w-[81px] font-bold text-[8px] text-white lg:text-[10px] leading-[15px] transition-color"
                        >
                            CARI
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchNews;
