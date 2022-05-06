import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import MintLayout from '../layouts/mintLayout';
import top_ags from '../resources/images/mint/top_ags.svg';
import bottomLeft from '../resources/images/mint/bottomLeft.svg';
import bottomRight from '../resources/images/mint/bottomRight.svg';
import MintAnimBackground from './animBacks/mintBack';
import { useEtherBalance, useEthers } from '@usedapp/core';
import useTotalCount from '../hook/useTotalCount';
import useNFTPrice from '../hook/useNFTPrice';
import useMintedCount from '../hook/useMintedCount';
import useWhitelistMode from '../hook/useWhitelistMode';
import { useMintNormal, useMintWhitelist } from '../hook/useMint';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getWhiteListInfo } from '../utils/whitelist';

const MintPage = () => {
  const [count, setCount] = useState(1);
  const { account, active } = useEthers();
  const balance = useEtherBalance(account);
  const totalCount = useTotalCount();
  const price = useNFTPrice();
  console.log('price: ', price);
  const mintedCount = useMintedCount();
  const whitelistMode = useWhitelistMode();
  console.log('count: ', totalCount, mintedCount);
  const { state: stateForMintNormal, send: mintNormal } = useMintNormal();
  const { state: stateForMintWhitelist, send: mintWhitelist } =
    useMintWhitelist();

  useEffect(() => {
    if (stateForMintNormal) {
      stateForMintNormal.status === 'Exception' &&
        toast.error(stateForMintNormal.errorMessage);
      stateForMintNormal.status === 'Success' && toast.success('Mint success!');
    }
    if (stateForMintWhitelist) {
      stateForMintWhitelist.status === 'Exception' &&
        toast.error(stateForMintWhitelist.errorMessage);
      stateForMintWhitelist.status === 'Success' &&
        toast.success('Mint success!');
    }

    console.log('status: ', stateForMintNormal, stateForMintWhitelist);
  }, [stateForMintNormal, stateForMintWhitelist]);

  const mintNow = async () => {
    console.log('mintNow: ', account);
    try {
      if (!active || !account) {
        toast.warning('Please connect your wallet!');
        return;
      } else if (balance?.lt(price?.mul(count))) {
        toast.error('Not enough ETH to mint!');
        return;
      }

      let result;
      if (whitelistMode) {
        const data = await getWhiteListInfo(account);
        if (!data.verified) {
          toast.warning('You are not Whitelist member.');
          return;
        }
        result = await mintWhitelist(account, data.proof, count, {
          value: price.mul(count),
        });
      } else {
        result = await mintNormal(account, count, {
          value: price.mul(count),
        });
      }

      setCount(1);
    } catch (err: any) {
      const errStr = JSON.stringify(err);
      toast.warning(err);
      console.log('mintErr: ', errStr);
    }
  };

  return (
    <MintLayout>
      <MintAnimBackground />
      <main className='mint-form mb-[50px] md:mb-[100px] xl:mb-[200px] 2xl:mb-[100px]'>
        <div className='rounded-[40px] bg-[#020315] mt-[50px] md:mt-[70px] lg:mt-[50px] xl:mt-[70px] 2xl:mt-[2vw]'>
          <div className='overflow-hidden mx-[5vw] xl:mx-[25vw] 2xl:mx-[15vw] md:px-[100px] h-full pb-[40px] md:py-[55px] whiteAlpha bg-opacity-25 backdrop-blur-md rounded-[40px] font-extrabold text-center text-[30px] md:text-[36px] xl:text-[38.8px] 2xl:text-[2vw] uppercase flex flex-col lg:flex-row xl:flex-col 2xl:flex-row gap-0 lg:gap-[100px] xl:gap-0 2xl:justify-around items-center border-[2px] border-white border-opacity-50'>
            <div className='w-full flex flex-col 2xl:justify-center 2xl:flex-row items-center xl:block 2xl:w-fit'>
              <span className='2xl:order-2 w-full md:w-[220px] 2xl:w-[15vw] h-[150px] md:h-[220px] 2xl:h-[15vw] md:rounded-full bg-white bg-opacity-10 backdrop-blur-md border-b-[2px] border-b-white border-opacity-50 md:border-[2px] border-[#ffffff99] overflow-hidden xl:hidden 2xl:block pt-[40px] md:pt-[80px] 2xl:pt-[5vw] mb-[20px]'>
                <img
                  alt='top_ags'
                  src={top_ags}
                  className='block mx-auto md:rounded-full animate-bounce 2xl:w-[20vw]'
                />
              </span>
              <h1 className='md:px-0'>
                <p>AGS</p>
                <p className='text-[36px] md:text-[50px] xl:text-[58px]'>
                  ZOMBIE
                </p>
              </h1>
              <p className='text-[#FF8393] pt-[10px]'>
                {mintedCount.toNumber()}/{totalCount.toNumber()}
              </p>
            </div>
            <div className='md:px-0'>
              <div className='flex items-center justify-center gap-[50px] lg:gap-[30px] xl:gap-[80px] font-extrabold'>
                <button
                  className='w-[40px] md:w-[60px] xl:w-[80px] 2xl:w-[100px] h-[40px] md:h-[60px] xl:h-[80px] 2xl:h-[100px] flex justify-center items-center bg-white hover:bg-gradient-to-tr from-[#CB1E8D] to-[#FFE08D] rounded-full text-black hover:text-white'
                  onClick={() => setCount(count - 1 >= 1 ? count - 1 : 1)}
                >
                  -
                </button>

                {/* Selected Count */}

                <p className='text-[60px] md:text-[100px] lg:text-[120px] xl:text-[140px] 2xl:text-[200px] min-w-[100px] md:w-[200px] 2xl:w-[300px]'>
                  {count}
                </p>
                <button
                  className='w-[40px] md:w-[60px] xl:w-[80px] 2xl:w-[100px] h-[40px] md:h-[60px] xl:h-[80px] 2xl:h-[100px] flex justify-center items-center bg-white hover:bg-gradient-to-tr from-[#CB1E8D] to-[#FFE08D] rounded-full text-black hover:text-white'
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
              <p className='lg:text-[32px] xl:text-[36px] 2xl:text-[50px]'>
                Total {ethers.utils.formatEther(price.mul(count))} ASTR
              </p>

              {/* This is Mint Button*/}

              <button
                className='mint-now mt-[30px] 2xl:mt-[2vw] px-[30px] md:px-[34px] py-[15px] md:py-[18px] lg:px-[40px] lg:py-[18px] xl:px-[54px] xl:py-[34px] text-[22px] xl:text-[26px] font-bold uppercase hover:rounded-tr-[100px] hover:rounded-bl-[100px] transition-all duration-100 delay-75'
                onClick={() => mintNow()}
              >
                Mint Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <ToastContainer toastClassName={'custom-toast-container'} />
    </MintLayout>
  );
};

export default MintPage;
