import { useEffect, useState } from 'react';
import SocialMedia from './SocialMedia';
import NewsTag from './NewsTag';

const categories = {
    TPB01: "TPB01 Tanpa Kemiskinan",
    TPB02: "TPB02 Tanpa Kelaparan",
    TPB03: "TPB03 Kehidupan Sehat dan Sejahtera",
    TPB04: "TPB04 Pendidikan Berkualitas",
    TPB05: "TPB05 Kesetaraan Gender",
    TPB06: "TPB06 Air Bersih dan Sanitasi Layak",
    TPB07: "TPB07 Energi Bersih dan Terjangkau",
    TPB08: "TPB08 Pekerjaan Layak dan Pertumbuhan Ekonomi",
    TPB09: "TPB09 Industri, Inovasi, dan Infrastruktur",
    TPB10: "TPB10 Berkurangnya Kesenjangan",
    TPB11: "TPB11 Kota dan Pemukiman yang Berkelanjutan",
    TPB12: "TPB12 Konsumsi dan Produksi yang Bertanggung Jawab",
    TPB13: "TPB13 Penanganan Perubahan Iklim",
    TPB14: "TPB14 Ekosistem Lautan",
    TPB15: "TPB15 Ekosistem Daratan",
    TPB16: "TPB16 Perdamaian, Keadilan, dan Kelembagaan yang Tangguh",
    TPB17: "TPB17 Kemitraan untuk Mencapai Tujuan"
};

function Content({ article, tag }) {
    const [paragraphs, setParagraphs] = useState([]);

    useEffect(() => {
        if (typeof article === 'string' && article.includes('<p>')) {
            const div = document.createElement('div');
            div.innerHTML = article;

            const pTags = div.querySelectorAll('p');
            const result = Array.from(pTags).map(p => p.innerHTML.trim());
            setParagraphs(result);
        }
    }, [article]);

    return (
        <div className="flex md:flex-row flex-col justify-center">
            <SocialMedia />
            <div className="md:w-[524px] lg:w-[654px]">
                {/* Paragraf Pertama */}
                {paragraphs[0] && (
                    <div className="px-8 py-2 pt-8 font-light text-[16px] text-hijau-usu lg:text-[20px] leading-[25.6px] lg:leading-8 tracking-normal">
                        <div dangerouslySetInnerHTML={{ __html: paragraphs[0] }} />
                    </div>
                )}

                {/* Paragraf Berikutnya */}
                {paragraphs.slice(1).map((para, index) => (
                    <div key={index} className="px-8 py-2 font-normal text-[12px] text-hitam-usu lg:text-[14px] leading-[19.2px] lg:leading-[22.4px]">
                        <div dangerouslySetInnerHTML={{ __html: para }} />
                    </div>
                ))}

                {/* Border */}
                <div className="mt-4 px-8">
                    <div className="border-[#FAFAFA] border-[2px]" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 px-8 py-2">
                    {Array.isArray(tag) &&
                        tag.map((t, index) => {
                            const label = categories[t] || t;
                            return <NewsTag key={index} label={label} />;
                        })}
                </div>
            </div>
            <div className="px-8 md:px-16"></div>
        </div>
    );
}

export default Content;
