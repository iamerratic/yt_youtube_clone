import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/Home.page';
import SearchPage from './pages/SearchPage/Search.page';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/results' component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
