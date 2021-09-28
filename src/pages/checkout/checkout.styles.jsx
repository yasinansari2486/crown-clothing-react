import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;

    button {
        margin-top: 30px;;
        margin-left: auto;
    }
`;

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--ter);
`;

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 23%;
    font-size: 1.2rem;

    &:last-child {
        width: 8%;
    }
`;

export const TotalContainer = styled.div`
    margin: 30px 0 0 auto;
    font-size: 2.5rem;
`;

export const WarningContainer = styled.div`
    text-align: center;
    margin-top: 35px;
    font-size: 1.2rem;
    color: red;
`;