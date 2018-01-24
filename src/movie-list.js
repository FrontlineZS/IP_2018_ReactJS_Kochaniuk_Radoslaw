import React from 'react';
import MovieItem from './movie-item';

export default class MovieList extends React.Component {
  render() {
    return (
      <ul>
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
    );
  }
}
