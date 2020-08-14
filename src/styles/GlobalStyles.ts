import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--grey-2);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }
  html {
    background: var(--purple-5);
  }
  :root {
    --white: #FFFFFF;
    --grey-1: #E5E5E5;
    --grey-2: #494949;
    --purple-1: #3A2E82;
    --purple-2: #3b5bfd;
    --purple-3: #5A4AAA;
    --purple-4: #9F94EC;
    --purple-5: #EAE7FF;
    --purple-6: #9aaabe;
  }
`;
