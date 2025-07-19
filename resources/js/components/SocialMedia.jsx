import share from '../assets/social-media/share.png';
import facebook from '../assets/social-media/facebook.png';
import twitter from '../assets/social-media/x.png';
import instagram from '../assets/social-media/instagram.png';

function SocialMedia() {
    return (
        <div className="md:top-2 md:sticky flex justify-center items-start md:mt-2 px-8 md:px-4 md:pl-[42px] h-fit">
            <div className="flex md:flex-col justify-between items-center p-8 w-[152px] md:w-[80px] md:h-[170px]">
                <div className=''>
                    <img className="w-[14px] lg:w-[16px]" src={share} alt="share" />
                </div>
                <div className=''>
                    <img className="w-[14px] lg:w-[16px]" src={twitter} alt="twitter" />
                </div>
                <div className=''>
                    <img className="w-[14px] lg:w-[16px]" src={instagram} alt="instagram" />
                </div>
                <div className=''>
                    <img className="w-[14px] lg:w-[16px]" src={facebook} alt="facebook" />
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;
