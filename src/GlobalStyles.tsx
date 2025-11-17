import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    src: url('/fonts/Manrope-VariableFont_wght.ttf') format('truetype');
  }

  @font-face {
    font-family: 'StackSans';
    src: url('/fonts/StackSansNotch-VariableFont_wght.ttf') format('truetype');
  }

  :root {
    --background-color: #eaf4ff;
    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background-color);
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyles;
