import React from 'react';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import { displayAddress } from '../../utils/helpers';
// import ethIcon from '../../assets/media/eth.png';
import useOnboard from '../../hook/useOnboard';

const ConnectButton = () => {
  const { account, deactivate, activate, activateBrowserWallet } = useEthers();

  const onboardSubscriber = {
    wallet: async (wallet: any) => {
      console.log('wallet: ', wallet);
      await onboard.walletCheck();
      if (wallet && wallet.provider) {
        await activate(wallet.provider);
      }
    },
  };

  const etherBalance = useEtherBalance(account);
  const onboard = useOnboard(onboardSubscriber);

  const connectWallet = async () => {
    await onboard.walletSelect();
  };

  return (
    <>
      {!account && (
        <button
          className='px-[30px] md:px-[60px] font-bold py-[10px] md:py-[20px] bg-gradient-to-r from-[#CB1E8D] to-[#FFE08D] hover:bg-gradient-to-l rounded-tr-full rounded-bl-full hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-full hover:rounded-br-full transition-all duration-150'
          onClick={(e) => {
            e.stopPropagation();
            connectWallet();
          }}
        >
          Connect
        </button>
      )}

      {account && (
        <div
          className='px-[30px] md:px-[60px] font-bold py-[10px] md:py-[20px] bg-gradient-to-r from-[#CB1E8D] to-[#FFE08D] hover:bg-gradient-to-l rounded-tr-full rounded-bl-full hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-full hover:rounded-br-full transition-all duration-150'
          onClick={(e) => {
            e.stopPropagation();
            deactivate();
          }}
        >
          {/* <img src={ethIcon} /> */}
          <div>
            <span className='account text-[16px] md:text-[22px]'>
              {displayAddress(account)}
            </span>
            {etherBalance && (
              <>
                (
                <span className='balance'>
                  {parseFloat(ethers.utils.formatEther(etherBalance)).toFixed(
                    2
                  )}{' '}
                  ETH
                </span>
                )
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectButton;
