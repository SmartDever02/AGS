import Onboard from 'bnc-onboard';
import { NETWORK_ID } from '../config/config';

const useOnboard = (subscribers: any) => {
    const onboard = Onboard({
        // dappId: BLOCKNATIVE_KEY,
        networkId: NETWORK_ID,
        subscriptions: {
          ...subscribers
        }
    });

    return onboard;
}

export default useOnboard;