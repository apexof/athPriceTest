import axios, { AxiosError } from "axios";

export const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        API_KEY: process.env.NEXT_PUBLIC_CRYPTO_RANK_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(axiosError.message);
  }
};
