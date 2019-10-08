import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './apolloClient';
import Location from './pages/Location';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/location">
            <Location />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
