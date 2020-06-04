import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './services/apollo';
import GlobalStyle, { defaultTheme } from './styles/global-style';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <h1>Lorem ipsum</h1>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
