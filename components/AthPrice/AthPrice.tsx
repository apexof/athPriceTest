import { useGetCurrency } from '@/hooks/useGetCoin';
import { calcFromAth } from '@/utils/calcAth/calcFromAth/calcFromAth';
import React, { FC } from 'react';
import { styled } from 'styled-components';
import NumberFormat from 'react-number-format';
import { calcToAth } from '@/utils/calcAth/calcToAth/calcToAth';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  color: #fff;
  font-size: 24px;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  & + & {
    margin-top: 10px;
  }
`;

const Label = styled.span`
  font-weight: bold;
`;

const Price = styled.span`
  color: #ddd;
`;

interface Props {
  currencyName: string;
}

export const AthPrice: FC<Props> = (props) => {
  const { currencyName } = props;
  const { data, error, isLoading } = useGetCurrency(currencyName);
console.log('data',data );
  if (isLoading) {
    return (
      <Container>
        <div>Loading...</div>
      </Container>
    );
  }

  if (data) {
    return (
      <Container>
        <PriceContainer>
          <Label>Current price:</Label>
          <Price>{data.price.USD}</Price>
        </PriceContainer>
        <PriceContainer>
          <Label>ATH:</Label>
          <Price>{data.athPrice.USD}</Price>
        </PriceContainer>
        <PriceContainer>
          <Label>From ATH:</Label>
          <Price>{calcFromAth(data.athPrice.USD, data.price.USD)}%</Price>
        </PriceContainer>
        <PriceContainer>
          <Label>To ATH:</Label>
          <Price>{calcToAth(data.athPrice.USD, data.price.USD)}%</Price>
        </PriceContainer>
      </Container>
    );
  }

  return (
    <Container>
      <ErrorMessage>Error: {error?.message || 'unknown error'}</ErrorMessage>
    </Container>
  );
};
