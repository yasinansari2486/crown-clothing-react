import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid var(--ter);
  padding: 15px 0;
  font-size:  1.5rem;
  align-items: center;

  @media screen and (max-width: 850px) {
    height: 60px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 850px) {
    height: 100%
  }
`;

export const TextContainer = styled.span`
  width: 23%;

  @media screen and (max-width: 850px) {
    font-size: 1.2rem;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }

  @media screen and (max-width: 850px) {
    span {
      margin: 0 10px;
    }
 }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;

`;