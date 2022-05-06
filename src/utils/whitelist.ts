import axios from "./axios";

export const getWhiteListInfo = async (address: string) => {
  try {
    let response = await axios.get(`/whitelist/${address}`);
    return response.data;
  } catch (error: any) {
    console.log("whitelisterror: ", error);
    return Promise.reject(error.response.data.message);
  }
};

export const getWhitelistCount = async () => {
  try {
    let response = await axios.get('/whitelist-count');
    return response.data.count;
  } catch (error: any) {
    console.log('whitelist-count: ', error);
    return 0;
  }
}

