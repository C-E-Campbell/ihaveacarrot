import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import styles from '../styles/Navigation.module.css';
export default function Navigation() {
  const [auth, setAuth] = useState(false);
  return (
    <nav className="teal lighten-2">
      <div className="nav-wrapper container">
        <a href="#modal1" className="brand-logo">
          <img src={Logo} alt="iHaveACarrot" id={styles.logo} />
        </a>
        {auth ? null : (
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
            <li>
              <Link
                to="/"
                className="waves-effect waves-light btn #fb8c00 orange darken-1"
              >
                Sign Out
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
