export default class MyLocalStorage {
  constructor() {
    const movies = window.localStorage.getItem('movies');
    this.movies = movies ? JSON.parse(movies) : [];
    if (!Array.isArray(this.movies)) this.movies = [];
    this._saveToLocalStorage();
  }

  get(id) {
    if (!id && id !== 0) return this.movies.slice();
    return this.movies[id];
  }

  set(id, data) {
    if (!data) this.movies.push(id);
    else this._setId(id, data);

    this._saveToLocalStorage();
  }

  _setId(id, data) {
    let movie = this.movies.find(movie => movie.id === id);
    Object.assign(movie, data);
  }

  _saveToLocalStorage() {
    window.localStorage.setItem('movies', JSON.stringify(this.movies));
  }
}
