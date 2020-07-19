import React from 'react';
import { withRouter } from 'react-router-dom';
function Recipe(props) {
  return (
    <div className="col s12 m4">
      <div
        onClick={() => props.history.push(`/recipe/${props.id}`)}
        className="card"
        style={{ marginBottom: '50px', minHeight: '500px' }}
      >
        <div className="card-image">
          <img src={props.image} alt="food" />
          {props.match.path === '/myrecipes' ? null : (
            <button
              href="/nowhere"
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  props.addFavorite(props.id, props.title, props.image);
                }}
                className="material-icons"
              >
                favorite
              </i>
            </button>
          )}
        </div>
        <div className="card-content">
          <span className="card-title">{props.title}</span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Recipe);
