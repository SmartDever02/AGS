import { Contract } from "@ethersproject/contracts";
import {  useCall } from "@usedapp/core"
import { BigNumber } from "ethers";
import contractAbi from "../abi/NFT.json";
import { contractAddress } from "../config/config";


const useMintedCount = () => {
    const {value, error} = useCall({
        contract: new Contract(contractAddress, contractAbi.abi),
        method: "totalSupply",
        args: []
    }) || {value: [BigNumber.from(0)]};
    return value ? value[0] : BigNumber.from(0);
}

export default useMintedCount;