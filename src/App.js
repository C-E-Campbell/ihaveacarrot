import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './styles/App.module.css';
import MyRecipes from './containers/MyRecipes';
import Navigation from './components/Navigation.jsx';
import Home from './containers/Home.jsx';
import SignUp from './containers/SignUp';
import Login from './containers/Login';

export default function App() {
  const [token, setToken] = useState('');

  return (
    <Router>
      <div className={styles.container}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/recipes">
            <MyRecipes />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
