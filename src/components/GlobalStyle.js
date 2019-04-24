import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    background-color: ${props => props.theme.palette.background};
    color: ${props => props.theme.palette.text};
  }

  a {
    color: ${props => props.theme.palette.primary};
  }
`;

export default GlobalStyle;
