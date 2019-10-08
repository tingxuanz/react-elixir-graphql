import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './apolloClient';
import Home from './pages/Home';
import Result from './pages/Result';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
