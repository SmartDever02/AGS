import { Contract } from "@ethersproject/contracts";
import {  useCall } from "@usedapp/core"
import { BigNumber } from "ethers";
import contractAbi from "../abi/NFT.json";
import { contractAddress } from "../config/config";
import useContract from "./useContract";


const useTotalCount = () => {
    const contract = useContract(contractAddress, contractAbi.abi);
    console.log('contract: ', contract);
    
    const {value, error} = useCall({
        contract: contract,
        method: "maxSupply",
        args: []
    }) || {value: [BigNumber.from(0)]};

    return  value ? value[0] : BigNumber.from(0);
}

export default useTotalCount;