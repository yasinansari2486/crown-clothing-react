import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80vw;;
    margin: 2.8rem auto;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`