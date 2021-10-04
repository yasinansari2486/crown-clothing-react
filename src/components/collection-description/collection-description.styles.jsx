import styled from "styled-components";

export const CollectionDescriptionContainer = styled.div`
    width: 60vw;
    display: flex;
    height: 50vh;
    // align-items: centre;
    justify-content: space-between;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.336);
    border-radius: 15px;
    margin: 3.4em auto;
    color: var(--ter);

    @media screen and (max-width: 800px) {
        flex-direction : column;
        height: 80vh;
        width: 50vw;
        margin: 1.5em auto;
    }
`;

export const CollectionItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 65%

    @media screen and (max-width: 800px) {
        height:50%;
    }
`

export const BackgroundImage = styled.div`
    width: 40%;
    height: 100%;
    background-size: cover;
    background-position: center;
    // background-repeat: ;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};

    @media screen and (max-width: 800px) {
        height: 50%;
        width: 100%;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 0;

    }
`;

export const CollectionHeaderContainer = styled.div`
    width: 100%;
    height: 45%;
    border-top-right-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1.3rem;
    font-weight: 700;

    @media screen and (max-width: 800px) {
        font-size: 1.1rem;
    }
`;


export const CollectionButton = styled.div`
    display: flex;
    justify-content: space-around;

    // i {
    //     color: var(--ter);
    //     cursor: pointer;

    //     &:hover {
    //         transform: scale(1.2);
    //     }
    // }

    button {
        background-color: var(--ter);
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        padding: 0.3rem 1rem;
        font-weight: 600;
        border: none;
    }

`;

export const CollectionInfoContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1.5em 0 0.8em 0;

    @media screen and (max-width: 800px) {
        margin: 0.5em 0 0.3em 0;
    }
`;

export const DescriptionContainer = styled.div`
    width: 80%;
    height:35%;
    margin: 1em auto 0 auto;

`

export const Description = styled.div`
   Padding: 5px;
   font-size: 1.2rem;
`;

export const ProductName = styled.h2`
    margin: auto;

    @media screen and (max-width: 800px) {
        font-size: 1.4rem;
        margin: 0.8em auto;
    }
`;
