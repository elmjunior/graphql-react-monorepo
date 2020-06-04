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
        <div className="App"></div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
