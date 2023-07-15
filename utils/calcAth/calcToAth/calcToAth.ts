import Big from 'big.js';

export const calcToAth = (ath: number, currentPrice: number): number => {
  if(currentPrice === 0) {
      console.error('Invalid currentPrice Value Received from Backend in', new Error().stack);
    return 0;
  }
  if(currentPrice > ath) {
    console.error('Invalid ATH or Price Value Received from Backend in', new Error().stack);
  }
  const toAth = Big(ath).minus(currentPrice)
    .div(currentPrice)
    .times(100);

  return toAth.toNumber(); 
}