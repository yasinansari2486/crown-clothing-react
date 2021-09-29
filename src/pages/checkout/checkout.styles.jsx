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

    @media screen and (max-width: 850px) {
        width: 90%;
        margin: 40px auto;

        button {
            margin-top: 20px;;
            margin-left: auto;
        }
    }
`;

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--ter);

    @media screen and (max-width: 850px) {
       height: 35px;
    }
`;

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 22%;
    font-size: 1.2rem;

    &:last-child {
        width: 12%;
    }

    @media screen and (max-width: 850px) {
        font-size: 1rem;
    }

`;

export const TotalContainer = styled.div`
    margin: 30px 0 0 auto;
    font-size: 2.5rem;

    @media screen and (max-width: 850px) {
        font-size: 1.5rem;
    }
`;

export const WarningContainer = styled.div`
    text-align: center;
    margin-top: 35px;
    font-size: 1.2rem;
    color: red;

    @media screen and (max-width: 500px) {
        font-size: 1rem;
        margin-top: 30px;
    }

`;