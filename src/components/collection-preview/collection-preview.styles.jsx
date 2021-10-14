import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`;

export const TitleContainer = styled.h1`
    font-size: 2rem;
    margin-bottom: 25px;
    font-weight: 700;
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;

    & > div {
        margin-bottom: 40px;
    }


    @media screen and (max-width: 800px) {
       display: grid;
       grid-template-columns: 1fr;
       grid-gap:15px;
    }
`;