import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import styles from '../styles/Navigation.module.css';
export default function Navigation() {
  return (
    <nav className="teal lighten-2">
      <div className="nav-wrapper container">
        <a href="/" className="brand-logo">
          <img src={Logo} alt="iHaveACarrot" id={styles.logo} />
        </a>

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
            <a
              class="waves-effect waves-light btn modal-trigger  #fb8c00 orange darken-1"
              href="#modal1"
            >
              Sign up
            </a>
          </li>
          <li>
            <a className="waves-effect waves-light btn #fb8c00 orange darken-1">
              Login
            </a>
          </li>
        </ul>
      </div>
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            Agree
          </a>
        </div>
      </div>
    </nav>
  );
}
