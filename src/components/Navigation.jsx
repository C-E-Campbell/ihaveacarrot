import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import styles from '../styles/Navigation.module.css';
export default function Navigation(props) {
  return (
    <nav className="teal lighten-2">
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">
          <img src={Logo} alt="iHaveACarrot" id={styles.logo} />
        </Link>
        {props.isLogged ? (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link
                to="/myrecipes"
                className="waves-effect waves-light btn #fb8c00 orange darken-1"
              >
                My Recipes
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="waves-effect waves-light btn #fb8c00 orange darken-1"
                onClick={() => {
                  props.signOut();
                }}
              >
                Sign Out
              </Link>
            </li>
          </ul>
        ) : (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link
                className="waves-effect waves-light btn #fb8c00 orange darken-1"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="waves-effect waves-light btn modal-trigger  #fb8c00 orange darken-1"
                to="/signup"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="login"
                className="waves-effect waves-light btn #fb8c00 orange darken-1"
              >
                Login
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
