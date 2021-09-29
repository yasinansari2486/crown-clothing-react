import styled, {css} from "styled-components";

const googleSignInStyles = css`
    background-color: #4285f4;

    &:hover {
        background-color: #357ae8;
    }
`

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }
}

export const CustomButtonContainer = styled.button`
    min-width: 120px;
    width: auto;
    height: 45px;
    font-size: 0.9rem;
    padding: 0 25px;
    text-transform: uppercase;
    font-weight: bold;
    transition: all 0.2s ease-in;
    cursor: pointer;
    margin: 15px 0;
    background-color: var(--ter);
    color: #fff;
    border: none;

    &:hover {
        transform: scale(1.05);
    }

    ${getButtonStyles}

    @media screen and (max-width: 950px) {
        min-width: 100px;
        height: 40px;
        font-size: 0.7rem;
        padding: 0 10px;

    }
`