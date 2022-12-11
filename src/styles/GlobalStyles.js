import { css } from '@emotion/react';
import './fonts.css';

import PurpleBoob from 'images/background/purple_boob.png';
import PinkBoob from 'images/background/pink_boob.png';
import PurpleBoobDesk from 'images/background/purple_boob.png';
import PinkBoobDesk from 'images/background/pink_boob.png';

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
  }

  #root {
    min-height: 100vh;
    flex-direction: column;
    display: flex;

    background-color: #e7eaf2;

    @media screen and (min-width: 768px) {
      position: relative;

      background-image: url(${PurpleBoob}), url(${PinkBoob});
      background-position: 0 100%, 100% 0;
      background-repeat: no-repeat;
      /* background-attachment: fixed; */
    }

    @media screen and (min-width: 1280px) {
      background-image: url(${PurpleBoobDesk}), url(${PinkBoobDesk});
      background-position: 0 100%, 100% 0;
    }
  }

  main {
    flex-grow: 1;

    /* background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px); */
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
