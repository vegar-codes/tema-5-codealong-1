import React from 'react';

import HomeContainer from './containers/HomeContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <HomeContainer />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;