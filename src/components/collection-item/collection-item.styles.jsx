import styled from 'styled-components';
import url from '../../url';

export const CollectionItemContainer = styled.div`
    width: 20vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: centre;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.336);
    border-radius: 15px;
    background: var(--sec);

    @media screen and (max-width: 800px) {
        width: 40vw;
        height: 280px;
    }
`;

export const CollectionButton = styled.div`
    display: flex;
    justify-content: space-around;

    i {
        color: var(--ter);
        cursor: pointer;

        &:hover {
            transform: scale(1.2);
        }
    }

    button {
        background-color: var(--ter);
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        padding: 0.3rem 1rem;
        font-weight: 600;
        border: none;
    }

    @media screen and (max-width: 800px) {
        button {
            padding: 0.2rem 0.6rem;
            font-weight: 400;
        }

        i {
            font-size: 20px;
        }
    }
`;

export const BackgroundImage = styled.div`
    width: 95%;
    height: 75%;
    background-size: cover;
    background-position: center;
    margin: 8px auto;
    border-radius: 15px;
    background-image: ${({ imageUrl }) => `url(${url + imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 25%;
    border-top-right-radius: 25px;
    background: var(--prime);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1.2rem;
    font-weight: 700;

    @media screen and (max-width: 800px) {
        font-size: 1rem;
        font-weight: 600;
    }
`;

export const CollectionInfoContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;