import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body{
            background: #1b1b1b;
            font-family: 'Padauk', sans-serif;;
        }
        button{
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            padding:  1rem 2rem;
            border: 3px solid #23d997;
            outline: none;
            color: white;
            background: transparent;
            transition: all .5s ease;
            &:hover{
                background: #23d997;
                color: white;
            } font-family: 'Padauk', sans-serif;
        }
        h2{
            font-weight: lighter;
            font-size: 3rem;
        }
        h3{
            color: white;
        }
        h4{
            font-weight: bold;
            color: #1eb880;
            font-size: 1.5rem;
        }
        p{
            padding: 2rem 0rem;
            color: #fff;
            font-size: 1.2rem;
            line-height: 150%;
        }
        span{
            font-weight: bold;
            color: #23d997;
        }
        a{
            font-size: 1rem;
            text-decoration: none;
        }
    `;

export default GlobalStyle;
