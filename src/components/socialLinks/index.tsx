import instagram from '../../resources/images/landing/banner/socials/instagram.svg';
import discord from '../../resources/images/landing/banner/socials/discord.svg';
import original from '../../resources/images/landing/banner/socials/original.svg';
import twitter from '../../resources/images/landing/banner/socials/twitter.svg';
import youtube from '../../resources/images/landing/banner/socials/youtube.svg';

const SocialLink = ({ type, to }: socialType) => {
  const images = [
    { type: 'INSTAGRAM', data: instagram },
    { type: 'YOUTUBE', data: youtube },
    { type: 'DISCORD', data: discord },
    { type: 'TWITTER', data: twitter },
    { type: 'ORIGINAL', data: original },
  ];
  const social = images.filter((one) => one.type === type)[0];
  return (
    <a href={to}>
      <img
        src={social.data}
        alt={social.type}
        className='w-[20px] lg:w-[25px] xl:w-auto hover:scale-150 transition-all duration-100 hover:animate-bounce 2xl:scale-[1.5]'
      />
    </a>
  );
};

interface socialType {
  type: string;
  to: string;
}
export default SocialLink;
