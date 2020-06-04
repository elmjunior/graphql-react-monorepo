import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Verdana,Geneva,sans-serif; 
    background-color: ${(props) => props.theme.colors.black};
  }
  h1 {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const defaultTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    black: '#151412',
    primary: '#93D35A',
    secondary: '#C3C3B7',
  },
};

export default GlobalStyle;
