import React from 'react';

export default function Recipe(props) {
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src={props.image} alt="food" />

            <a class="btn-floating halfway-fab waves-effect waves-light red">
              <i class="material-icons">favorite</i>
            </a>
          </div>
          <div class="card-content">
            <span class="card-title">{props.title}</span>
            <p>{props.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
