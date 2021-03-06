import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    border-bottom: 2px solid var(--ter);

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 10px 15px;

    @media screen and (max-width: 800px) {
       width: 50px;
       padding: 0;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;

    @media screen and (max-width: 800px) {
       width: 85%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    color: black;
    font-weight: 600;

    @media screen and (max-width: 600px) {
        font-size: 0.9rem;
    }
`;
