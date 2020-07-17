import React from 'react';

export default function Recipe(props) {
  return (
    <div className="col s12 m4">
      <div
        className="card"
        style={{ marginBottom: '50px', minHeight: '500px' }}
      >
        <div className="card-image">
          <img src={props.image} alt="food" />

          <a
            href="/nowhere"
            className="btn-floating halfway-fab waves-effect waves-light red"
          >
            <i className="material-icons">favorite</i>
          </a>
        </div>
        <div className="card-content">
          <span className="card-title">{props.title}</span>
        </div>
      </div>
    </div>
  );
}
