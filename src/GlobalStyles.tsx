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
    --tool-header-font-size: 2.25rem;
    @media (max-width: 450px) {
      --heading-font-size: 2.5rem;
      --description-font-size: 1rem;
      --tools-card-title-font-size: 1rem;
      --tool-header-font-size: 1.5rem;
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
  .notyf {
    @media (max-width: 450px) {
      top:1rem;
      .notyf__dismiss{
      width: 30px;
    }

        }
  }

  .notyf__toast{
   @media (max-width: 450px) {
    max-width:70%; 
    
    .notyf__wrapper{
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-right: 0.5rem;

      .notyf__message {
        font-size: 0.75rem;
      }
    }
  }
}
`;

export default GlobalStyles;
