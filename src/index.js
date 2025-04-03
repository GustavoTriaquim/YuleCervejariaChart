import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import textureimg from './Assets/soft-plaster-texture.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-width: none;
  }

  body {
    background-image: url(${textureimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
