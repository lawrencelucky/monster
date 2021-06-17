import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import ScrollToTop from './ScrollToTop';

import LandingPage from './pages/LandingPage/LandingPage';
import PreSalePage from './pages/PreSalePage/PreSalePage';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Switch>
        <Route path='/pre-sale' exact>
          <PreSalePage />
        </Route>
        <Route path='/' exact>
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
