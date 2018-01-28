import React from 'react';
import MovieCounter from './components/counter-component/MovieCounter';
import MovieList from './components/movie-components/MovieList';
import Form from './components/form-components/Form';
import MyLocalStorage from './components/localstorage-component/MyLocalStorage';

import './css/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.myLocalStorage = new MyLocalStorage();
    this.state = {
      movies: this.myLocalStorage.get()
    };

    this._toggleIsSeen = this._toggleIsSeen.bind(this);
    this._addNewMovie = this._addNewMovie.bind(this);
    this._countSeenMovies = this._countSeenMovies.bind(this);
    this._countAllMovies = this._countAllMovies.bind(this);
  }

  render() {
    return (
      <div>
        <MovieCounter
          seenMovies={this._countSeenMovies}
          allMovies={this._countAllMovies}
        />

        <MovieList
          movies={this.state.movies}
          toggleIsSeen={this._toggleIsSeen}
        />

        <Form movies={this.state.movies} addNewMovie={this._addNewMovie} />
      </div>
    );
  }

  _toggleIsSeen(id) {
    const movies = this.state.movies.slice();
    const movie = movies.find(movie => movie.id === id);

    const seen = (movie.seen =
      movie.seen === 'T' ? (movie.seen = 'F') : (movie.seen = 'T'));
    this.setState({ movies: movies });

    this.myLocalStorage.set(id, {
      seen: seen
    });
  }

  _addNewMovie(newMovie) {
    this.setState({ movies: [...this.state.movies, newMovie] });
    this.myLocalStorage.set(newMovie);
  }

  _countSeenMovies() {
    return this.state.movies.filter(movie => movie.seen === 'T').length;
  }

  _countAllMovies() {
    return this.state.movies.length;
  }
}
