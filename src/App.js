import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './containers/Home.jsx';

export default function App() {
  return (
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
  );
}
