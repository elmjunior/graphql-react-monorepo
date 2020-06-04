import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.black};
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
