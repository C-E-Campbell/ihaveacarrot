import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../utils/Theme';
import Navigation from './components/Navigation.jsx';
import Home from './containers/Home.jsx';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about"></Route>
            <Route path="/dashboard"></Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
