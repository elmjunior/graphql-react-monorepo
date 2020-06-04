import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import client from './services/apollo';
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App"></div>
    </ApolloProvider>
  );
}

export default App;
