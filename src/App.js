import React from 'react';
import MovieList from './movie-list';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies
    };

    this._toggleIsSeen = this._toggleIsSeen.bind(this);
  }

  render() {
    return (
      <MovieList movies={this.state.movies} toggleIsSeen={this._toggleIsSeen} />
    );
  }

  _toggleIsSeen(id) {
    console.log(this.state.movies);
    // const movies = this.state.movies.slice();
    // const movie = movies.find((movie) => movie.id === id)
    // movie.seen = movie.seen === 'T' ? movie.seen = 'F' : movie.seen = 'T'

    // this.setState({movies: movies})

    // this.myLocalStorage.set(id, {
    //   seen: seen
    // })
  }
}
