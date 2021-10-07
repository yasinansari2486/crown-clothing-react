import styled from "styled-components";
import url from '../../url';

export const CollectionDescriptionContainer = styled.div`
    width: 50vw;
    display: flex;
    height: 50vh;
    justify-content: space-between;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.336);
    border-radius: 15px;
    margin: 3.5em auto;
    color: var(--ter);

    @media screen and (max-width: 950px) {
        width: 80vw;
        height: 60vh;
        margin: 2em auto;
    }

    @media screen and (max-width: 650px) {
        flex-direction: column;
        width: 50vw;
        height: 50vh;
        margin: 2em auto;
    }
`;

export const BackgroundImage = styled.div`
    width: 50%;
    height: 100%;
    background-size: cover;
    background-position: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-image: ${({ imageUrl }) => `url(${url + imageUrl})`};

    @media screen and (max-width: 650px) {
        height: 50%;
        width: 100%;
        border-bottom-left-radius: 0;
        border-top-right-radius: 10px;
    }
`;

export const CollectionItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    padding: 15px;
    justify-content: space-around;

    @media screen and (max-width: 650px) {
        height: 50%;
        width: 100%;
        padding: 10px;
    }

`;


export const CollectionHeaderContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    font-weight: 700;

`;


export const CollectionInfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    font-weight: 700;

    @media screen and (max-width: 650px) {
        font-size: 1.1rem;
    }
`;

export const DescriptionContainer = styled.div`
    width: 100%;
    height:25%;
    margin-bottom: 5px;

`;

export const Description = styled.p`
    Padding: 5px;
    font-size: 1.1rem;
    text-overflow: elipsis;

    @media screen and (max-width: 800px) {
        font-size: 0.9rem;
    }
`;


export const CollectionButton = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 5px;

    button {
        background-color: var(--ter);
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        padding: 0.3rem 1rem;
        font-weight: 600;
        border: none;
    }


@media screen and (max-width: 650px) {
    button {
        font-size: 0.7rem;
        font-weight: 400;
        padding: 0.3rem 0.8rem;
    }
}

`;