import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import axios from 'axios';
import styles from './styles/App.module.css';
import MyRecipes from './containers/MyRecipes';
import Navigation from './components/Navigation.jsx';
import Home from './containers/Home.jsx';
import SignUp from './containers/SignUp';
import Login from './containers/Login';
import ViewRecipe from './containers/ViewRecipe';

function App(props) {
  const [token, setToken] = useState('');
  const [searchedRecipes, setSearchedRecipes] = useState('');

  const signUp = async (email, user, password) => {
    const result = await axios.post('/iHAC/v1/auth/register', {
      email,
      user,
      password,
    });
    setToken(result.data.token);
  };

  const login = async (email, user, password) => {
    const result = await axios.post('/iHAC/v1/auth/login', {
      email,
      user,
      password,
    });
    setToken(result.data.token);
  };

  const signOut = async () => {
    setToken('');
  };

  const setSearch = (terms) => {
    setSearchedRecipes(terms);
  };

  return (
    <Router>
      <div className={styles.container}>
        <Navigation signOut={signOut} isLogged={token} />
        <Switch>
          <Route exact path="/">
            <Home searchTermFN={setSearch} searchedRecipes={searchedRecipes} />
          </Route>
          <Route exact path="/recipes">
            <MyRecipes />
          </Route>
          <Route exact path="/signup">
            <SignUp signUp={signUp} />
          </Route>
          <Route exact path="/login">
            <Login login={login} />
          </Route>
          <Route exact path="/recipe/:id">
            <ViewRecipe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withRouter(App);
