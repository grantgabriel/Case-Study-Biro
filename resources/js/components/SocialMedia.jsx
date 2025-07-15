import share from '../assets/social-media/share.png';
import facebook from '../assets/social-media/facebook.png';
import twitter from '../assets/social-media/x.png';
import instagram from '../assets/social-media/instagram.png';

function SocialMedia() {
    return (
        <div className="flex md:flex-col justify-center items-center m-4 p-4 h-[62px] md:h-[200px]">
            <img src={share} alt="share" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
        </div>
    );
}

export default SocialMedia;
