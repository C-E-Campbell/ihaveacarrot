import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
function Login(props) {
  const [email, setEmail] = useState('');
  const [user, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container">
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.login(email, user, password);
          props.history.push('/');
        }}
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          value={user}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="user name"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button className="fect waves-light btn #fb8c00 orange darken-1">
          Submit
        </button>
      </form>
    </div>
  );
}

export default withRouter(Login);
