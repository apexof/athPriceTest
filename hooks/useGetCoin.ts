import { CRYPTO_RANK_API_URL } from "@/constants/cryptoRank";
import { Coin, LoadState } from "@/types";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export const useGetCoin = (currencyName: string): LoadState<Coin> => {
  const { data, error, isLoading } = useSWR<Record<string, Coin>, Error>(
    `${CRYPTO_RANK_API_URL}/coins/${currencyName}`,
    fetcher
  );

  return {
    data: data?.data,
    isLoading,
    error,
  };
};
