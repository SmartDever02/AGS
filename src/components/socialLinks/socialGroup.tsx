import SocialLink from './index';

const SocialGroup = ({ noOriginal }: { noOriginal?: boolean }) => {
  return (
    <div className='socials flex items-center gap-[20px] xl:gap-[32px] 2xl:gap-[60px]'>
      <SocialLink type='INSTAGRAM' to='https://instagram' />
      <SocialLink type='YOUTUBE' to='https://youtube' />
      <SocialLink type='DISCORD' to='https://discord' />
      <SocialLink type='TWITTER' to='https://twitter' />
      {!noOriginal && <SocialLink type='ORIGINAL' to='https://original' />}
    </div>
  );
};

export default SocialGroup;
