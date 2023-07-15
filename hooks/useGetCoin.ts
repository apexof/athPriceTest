import { CRYPTO_RANK_API_URL } from "@/constants/cryptoRank";
import { Currency, LoadState } from "@/types";
import { fetcher } from "@/utils/fetcher";
import useSWR from 'swr'

export const useGetCurrency = (currencyName: string): LoadState<Currency> => {
  const { data, error, isLoading } = useSWR<Record<string, Currency> , Error>(`${CRYPTO_RANK_API_URL}/coins/${currencyName}`, fetcher)

  return {
    data: data?.data,
    isLoading,
    error
  }
}