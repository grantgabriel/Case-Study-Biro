import { useState } from "react";

const categories = [
    "TPB01 Tanpa Kemiskinan",
    "TPB02 Tanpa Kelaparan",
    "TPB03 Kehidupan Sehat dan Sejahtera",
    "TPB04 Pendidikan Berkualitas",
    "TPB05 Kesetaraan Gender",
    "TPB06 Air Bersih dan Sanitasi Layak",
    "TPB07 Energi Bersih dan Terjangkau",
    "TPB08 Pekerjaan Layak dan Pertumbuhan Ekonomi",
    "TPB09 Industri, Inovasi, dan Infrastruktur",
    "TPB10 Berkurangnya Kesenjangan",
    "TPB11 Kota dan Pemukiman yang Berkelanjutan",
    "TPB12 Konsumsi dan Produksi yang Bertanggung Jawab",
    "TPB13 Penanganan Perubahan Iklim",
    "TPB14 Ekosistem Lautan",
    "TPB15 Ekosistem Daratan",
    "TPB16 Perdamaian, Keadilan, dan Kelembagaan yang Tangguh",
    "TPB17 Kemitraan untuk Mencapai Tujuan"
];

function Categories() {
    const [open, setOpen] = useState(true);

    return (
        <div className="hidden md:flex flex-col gap-2 lg:gap-4 py-4 md:w-[30%] lg:w-1/4 xl:w-1/5">
            <div className="flex flex-row justify-between items-center mb-2">
                <div id="categories" className="font-semibold text-[12px] text-hitam-usu">
                    Kategori
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className="font-semibold text-[12px] text-hitam-usu transition-transform duration-300"
                    aria-label="Toggle Kategori"
                >
                    {open ? "▼" : "▲"}
                </button>
            </div>

            <div
                id="checkbox-categories"
                className={`flex flex-col gap-2 overflow-y-auto transition-all duration-300 ease-in-out ${
                    open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}
            >
                {categories.map((category, index) => (
                    <label key={index} className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            className="bg-white checked:bg-hijau-usu border-[#D9D9D9] border-2 checked:border-hijau-usu rounded-[2px] w-4 h-4 appearance-none shrink-0"
                        />
                        <span className="font-normal text-[#4A5764] text-[10px] leading-[16px]">
                            {category}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default Categories;
