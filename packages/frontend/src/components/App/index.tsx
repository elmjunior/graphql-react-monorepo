import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { defaultTheme } from '../../styles/global-style';
const App: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default App;
