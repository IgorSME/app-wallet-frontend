import { css } from '@emotion/react';
import './fonts.css';

import LoginPurpleBoob from 'images/Login_purple_boob.png';
import LoginPinkBoob from 'images/Login_pink_boob.png';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Circe', 'Poppins', 'Segoe UI', 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-weight: 400;
    line-height: 1.5;

    background-color: #e7eaf2;

    @media screen and (min-width: 768px) {
      position: relative;

      background-image: url(${LoginPurpleBoob}), url(${LoginPinkBoob});
      background-repeat: no-repeat;
      background-position: 0 100%, 100% 0;
    }
    /* @media screen and (min-width: 1280px) {
      /* display: flex;
      padding: 0;
      background-image: none; */
    /* } */
  }

  #root {
    min-height: 100vh;
    flex-direction: column;
    display: flex;
  }

  main {
    flex-grow: 1;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
