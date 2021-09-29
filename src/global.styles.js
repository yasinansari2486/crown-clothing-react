import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --prim: #b7e4c7;
        --sec: #52b788;
        --ter: #1b4332;
    }

    * {
        box-sizing: border-box;
    }


    body{
        font-family: 'Roboto Condensed';
        background: var(--prim);
        padding: 20px 60px;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
    }


`;
