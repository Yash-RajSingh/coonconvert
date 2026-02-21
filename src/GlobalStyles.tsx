import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    src: local('Manrope Variable'),
         local('Manrope-Variable'),
         local('Manrope');
    font-display: swap;
  }

  @font-face {
    font-family: 'StackSans';
    src: local('Stack Sans Variable'),
         local('StackSans-Variable'),
         local('StackSans');
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Variable'),
         local('Roboto-Variable'),
         local('Roboto');
    font-display: swap;
  }

  :root {
    --background-color: #eaf4ff;
    --white: #ffffff;
    --grey: #919795;
    --theme-dark-blue: #125bfb;
    --theme-font-color: #333;


    --heading-font-size: 4rem;
    --description-font-size: 1.25rem;
    --tools-card-title-font-size: 1.25rem;
    @media (max-width: 450px) {
      --heading-font-size: 2.5rem;
      --description-font-size: 1rem;
      --tools-card-title-font-size: 1.125rem;
    }
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
      scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyles;
