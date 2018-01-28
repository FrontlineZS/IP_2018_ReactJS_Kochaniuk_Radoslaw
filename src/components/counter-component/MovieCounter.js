import React from 'react';

import '../../css/App.css';

export default class MovieCounter extends React.Component {
  render() {
    return (
      <div className="movies-counters-container">
        <p className="movies-counters-container__paragraph">
          All:
          <span className="movies-counters-container__span">
            {this.props.allMovies()}
          </span>
        </p>
        <p className="movies-counters-container__paragraph">
          Viewed:
          <span className="movies-counters-container__span">
            {this.props.seenMovies()}
          </span>
        </p>
      </div>
    );
  }
}
