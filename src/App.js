import React from 'react';

import GlobalStyle from './components/GlobalStyle';
import HomeContainer from './containers/HomeContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
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