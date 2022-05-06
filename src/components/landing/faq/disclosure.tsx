import { useState } from 'react';
import { Transition } from '@headlessui/react';

import plus from '../../../resources/images/landing/faq/plus.svg';
import minus from '../../../resources/images/landing/faq/minus.svg';

const Disclosure = (props: propsType) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`cursor-pointer transition-all duration-300 bg-white w-full rounded-[5px] py-[10px] lg:py-[20px] xl:py-[36px] 2xl:py-[43px] px-[20px] lg:px-[35px] xl:px-[65px] ${
        open ? 'bg-opacity-100 text-black' : 'bg-opacity-[0.15] text-white'
      }`}
    >
      <div className='flex justify-between items-center'>
        <div className='max-w-[90%] font-bold text-[12px] md:text-[16px] lg:text-[14px] xl:text-[18px] 2xl:text-[1.1vw]'>
          {props.title}
        </div>
        {open ? <img src={minus} alt='-' /> : <img src={plus} alt='-' />}
      </div>
      <Transition
        show={open}
        enter='transition duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='mt-[10px] font-normal text-[10px] md:text-[14px] lg:text-[12px] xl:text-[14px] 2xl:text-[0.8vw] leading-[18px] lg:leading-[22px] xl:leading-[28px] 2xl:leading-[1.5vw]'>
          {props.content}
        </div>
      </Transition>
    </div>
  );
};

interface propsType {
  title: string;
  content: string;
}

export default Disclosure;
