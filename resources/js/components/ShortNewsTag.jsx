import { useEffect, useState } from 'react';

function ShortNewsTag({ label }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const shortLabel = isMobile ? label.split(' ')[0] : label;

    return (
        <div className="gap-1 bg-[#038A47] px-2 py-1 rounded-[20px] font-bold text-[6px] text-white lg:text-[8px]">
            {shortLabel}
        </div>
    );
}

export default ShortNewsTag;
