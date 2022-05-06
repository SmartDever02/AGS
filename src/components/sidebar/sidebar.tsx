import { useEffect } from 'react';
import { useScrollBlock } from '../../hook/useScrollBlock';
import NavMenu from '../navbar/navMenu';

const Sidebar = ({
  visible,
  changeVisible,
}: {
  visible: boolean;
  changeVisible: any;
}) => {
  const [blockScroll, allowScroll] = useScrollBlock();
  useEffect(() => {
    visible ? blockScroll() : allowScroll();
  });

  return (
    <>
      <div
        className={`${
          !visible ? 'h-[0]' : 'h-[500px] pt-[20px]'
        } mobile-sidebar absolute top-[100px] left-0 w-full z-[30] transition-all duration-300 text-[18px] text-center flex flex-col overflow-hidden`}
      >
        <NavMenu
          onClick={() => {
            changeVisible(false);
          }}
          available={visible}
        />
      </div>
      {visible && (
        <div
          className='absolute top-[450px] left-0 w-full h-[300px] z-[30] bg-gradient-to-b from-[#03041a] to-[#03041a00]'
          onClick={() => changeVisible(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
