import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import 'modern-normalize';
import App from './App';
import { Global, ThemeProvider } from '@emotion/react';

import { GlobalStyles, theme } from 'styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />

        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
