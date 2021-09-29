import styled from "styled-components";
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid var(--ter);
    background-color: var(--prim);
    top: 80px;
    right: 5px;
    z-index: 5;

    @media screen and (max-width: 800px) {
       width: 180px:
       height: 300px;
       padding: 10px;
       top:60px;
    }
`;

export const CartItemsContainer = styled.div`
    height: 260px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartDropdownButton = styled(CustomButton)`
    margin: 30px auto 0 auto;

    @media screen and (max-width: 800px) {
        padding: 0.2rem 0.6rem;
        font-size: 0.8rem;
    }
`;