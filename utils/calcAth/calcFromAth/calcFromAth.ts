import Big from 'big.js';

export const calcFromAth = (ath: number, currentPrice: number): number => {
  if(ath === 0) {
      console.error('Invalid ATH Value Received from Backend in', new Error().stack);
    return 0;
  }
  if(currentPrice > ath) {
    console.error('Invalid ATH or Price Value Received from Backend in', new Error().stack);
  }
  const fromAth = Big(ath).minus(currentPrice)
    .div(ath)
    .times(100);

  return fromAth.toNumber(); 
}