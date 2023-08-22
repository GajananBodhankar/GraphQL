// In App.js in a new project

import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './src/GraphQL/apolloclient';
import Country from './src/GraphQL/country';
function App() {
  return (
    <ApolloProvider client={client}>
      <Country/>
    </ApolloProvider>
  );
}

export default App;
