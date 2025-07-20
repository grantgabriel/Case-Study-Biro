import ShortNewsTag from './ShortNewsTag';
import Pagination from './Pagination';
import SearchNews from './SearchNews';
import Categories from './Categories';

function getFirstParagraph(html) {
    if (!html || typeof html !== "string") return "";
    const match = html.match(/<p[^>]*>(.*?)<\/p>/i);
    if (match && match[1]) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = match[1];
        return tempDiv.innerText;
    }
    return "";
}

const categories = {
    "TPB01": "TPB01 Tanpa Kemiskinan",
    "TPB02": "TPB02 Tanpa Kelaparan",
    "TPB03": "TPB03 Kehidupan Sehat dan Sejahtera",
    "TPB04": "TPB04 Pendidikan Berkualitas",
    "TPB05": "TPB05 Kesetaraan Gender",
    "TPB06": "TPB06 Air Bersih dan Sanitasi Layak",
    "TPB07": "TPB07 Energi Bersih dan Terjangkau",
    "TPB08": "TPB08 Pekerjaan Layak dan Pertumbuhan Ekonomi",
    "TPB09": "TPB09 Industri, Inovasi, dan Infrastruktur",
    "TPB10": "TPB10 Berkurangnya Kesenjangan",
    "TPB11": "TPB11 Kota dan Pemukiman yang Berkelanjutan",
    "TPB12": "TPB12 Konsumsi dan Produksi yang Bertanggung Jawab",
    "TPB13": "TPB13 Penanganan Perubahan Iklim",
    "TPB14": "TPB14 Ekosistem Lautan",
    "TPB15": "TPB15 Ekosistem Daratan",
    "TPB16": "TPB16 Perdamaian, Keadilan, dan Kelembagaan yang Tangguh",
    "TPB17": "TPB17 Kemitraan untuk Mencapai Tujuan"
};

function NewsList({ data, dashboard }) {
    const mainContentClass = `
        flex flex-col gap-2 md:pr-8 lg:pr-16
        ${dashboard === "on"
            ? "w-full"
            : "w-full md:w-[70%] lg:w-3/4 xl:w-4/5"
        }
    `;

    const actionButtons = `
        flex flex-col gap-2 justify-around items-center h-full
        ${dashboard === "on"
            ? ""
            : "hidden"
        }
    `;

    return (
        <div className="flex px-8 lg:px-16 2xl:px-[224px] py-2">
            <div className={mainContentClass}>
                <SearchNews toggle={dashboard} />
                {data.map((article, index) => (
                    <div key={index} className="flex justify-between items-start gap-4 lg:gap-8 lg:bg-background-gray-usu px-2 py-4 rounded-2xl">
                        <div className='relative flex flex-shrink-0 items-center'>
                            <img
                                src={article.thumbnail}
                                alt="Berita Thumbnail"
                                className="rounded-lg w-[133px] lg:w-[194px] h-[100px] lg:h-[145px] object-cover"
                            />
                        </div>
                        <div className='flex flex-col justify-start gap-1 w-full h-full'>
                            <div className='flex gap-1'>
                                {Array.isArray(article.tags) && article.tags.map((t, index) => {
                                    const label = categories[t] || t;
                                    return <ShortNewsTag key={index} label={label} />
                                })}
                            </div>
                            <a href={`/activities/detail-berita/${article.slug}`}>
                                <h2 className='font-semibold text-[12px] lg:text-[16px] leading-[17px] lg:leading-5'>
                                    {article.title}
                                </h2>
                            </a>
                            <div className="hidden md:flex flex-nowrap">
                                <p className="font-normal lg:font-normal text-[10px] text-text-gray-usu lg:text-[14px] line-clamp-1 lg:line-clamp-3 leading-4 lg:leading-[22.4px]">
                                    {getFirstParagraph(article.article)}
                                </p>
                            </div>
                            <div className='flex items-end h-full font-medium text-[#8FA0B1] text-[6px] lg:text-[10px] leading-4'>
                                <p>
                                    {article.formatted_date}
                                </p>
                            </div>
                        </div>
                        <div className={actionButtons}>
                            <a
                                href={`/dashboard/action/delete-berita/${article.id}`}
                                className="flex justify-center items-center gap-1 bg-red-600 hover:bg-red-700 px-2 py-1 rounded font-medium text-[10px] text-white lg:text-[14px] text-center transition-all"
                                onClick={(e) => {
                                    if (!window.confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                🗑️ Delete
                            </a>
                            <a href={`/dashboard/action/edit-berita/${article.id}`} className="flex justify-center items-center gap-1 bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded font-medium text-[10px] text-white lg:text-[14px] text-center transition-all">
                                ✏️ Edit
                            </a>
                        </div>
                    </div>
                ))}
                <Pagination />
            </div>
            {
                dashboard !== "on" && (
                    <Categories />
                )
            }
        </div>
    );
}

export default NewsList;
