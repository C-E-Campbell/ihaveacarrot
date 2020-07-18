import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './styles/App.module.css';
import MyRecipes from './containers/MyRecipes';
import Navigation from './components/Navigation.jsx';
import Home from './containers/Home.jsx';

export default function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recipes">
            <MyRecipes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
