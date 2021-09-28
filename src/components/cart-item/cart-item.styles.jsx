import styled from 'styled-components';

export const CartItemContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    margin-bottom: 2px;
    padding: 5px 0;
    border-bottom: 1px solid var(--ter);
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const ItemDetailsContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`;