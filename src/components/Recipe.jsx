import React from 'react';

export default function Recipe(props) {
  return (
    <div class="col s1 m4">
      <div class="card" style={{ marginBottom: '50px', minHeight: '500px' }}>
        <div class="card-image">
          <img src={props.image} alt="food" />

          <a class="btn-floating halfway-fab waves-effect waves-light red">
            <i class="material-icons">favorite</i>
          </a>
        </div>
        <div class="card-content">
          <span class="card-title">{props.title}</span>
        </div>
      </div>
    </div>
  );
}
