import React from 'react';
import MovieItem from './MovieItem';

export default class MovieList extends React.Component {
  render() {
    return (
      <div className="movies-list-container">
        <ul className="movie-list">
          {this.props.movies.map(movie => (
            <MovieItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              genre={movie.genre}
              summary={movie.summary}
              seen={movie.seen}
              toggleOnClick={this.props.toggleIsSeen}
            />
          ))}
        </ul>
      </div>
    );
  }
}
