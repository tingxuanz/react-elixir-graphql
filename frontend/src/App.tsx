import React from 'react';
import { ApolloProvider } from 'react-apollo';

import './App.css';
import apolloClient from './apolloClient';
import ExchangeRates from './components/Test';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div>
          <ExchangeRates />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
