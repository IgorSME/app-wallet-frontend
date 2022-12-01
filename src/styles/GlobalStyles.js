import { css } from '@emotion/react';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  @font-face {
    font-family: 'Circe';
    src: url('../assets/fonts/Circe-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Circe';
    font-weight: 700;
    src: url('../assets/fonts/Circe-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    src: url('../assets/fonts/Poppins-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 700;
    src: url('../assets/fonts/Poppins-Bold.ttf') format('truetype');
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Circe', 'Poppins',
      'Segoe UI', 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
