import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import client from './services/apollo';

import App from './components/App';
import Navigator from './Navigator';

export default function Client() {
  return (
    <ApolloProvider client={client}>
      <App>
        <Navigator />
      </App>
    </ApolloProvider>
  );
}
