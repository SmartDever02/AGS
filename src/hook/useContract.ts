import { Contract } from "ethers"

const useContract = (address: string, abi: any) => {
    const contract = new Contract(address, abi);
    return contract;
}

export default useContract;