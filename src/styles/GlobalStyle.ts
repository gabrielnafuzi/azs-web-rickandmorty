import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --text-color: #333;
    --text-white: #fff;
    --accent: #159FED;
    --red: #D3455B;
    --green: #00BFA5;
    --alive-status: #55CC44;
    --dead-status: #D63D2E;
    --unknow-status: #FF9800;
    --background: #fff;
    --placeholder-color: #BEC7D5;
    --shadow: 0px 2px 11px rgba(0, 0, 0, 0.2);
    --roundness: 6px;

    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  input,
  button {
    border: 0;
    background: none;
    font-family: 'Nunito', sans-serif;
    color: var(--text-color);
    transition: color 0.2s ease-in-out;
  }

  html {
    min-height: 100%;
    background: var(--background);
    transition: background 0.2s ease-in-out;
  }

  body {
    padding-bottom: 10rem;
  }

  ul {
    list-style: none;
  }

  .hightlight-text {
    color: var(--accent);
  }
`
