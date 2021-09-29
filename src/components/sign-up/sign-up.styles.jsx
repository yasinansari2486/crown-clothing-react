import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;

  @media screen and (max-width: 800px) {
    width: 60vw;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;