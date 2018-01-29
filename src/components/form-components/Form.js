import React from 'react';
import TitleField from './TitleField';
import YearField from './YearField';
import GenreField from './GenreField';
import SummaryField from './SummaryField';
import SubmitButtonField from './SubmitButtonField';

import '../../css/form-style.css';

export default class Form extends React.Component {
  render() {
    return (
      <div className="form-container">
        <form
          id="add-new-movie-form"
          action="#"
          method="post"
          name="add-new-movie-form"
          onSubmit={this._validateForm.bind(this)}
          noValidate
        >
          <ul>
            <li>
              <h2>Add New Movie</h2>
              <span className="required-notification">
                * Denotes Required Field
              </span>
            </li>
            <TitleField ref="titleField" />
            <YearField ref="yearField" />
            <GenreField ref="genreField" />
            <SummaryField ref="summaryField" />
            <SubmitButtonField />
          </ul>
        </form>
      </div>
    );
  }

  _validateForm(event) {
    event.preventDefault();

    let movies = this.props.movies;

    const id = movies.length + 1;
    const titleValue = this.refs.titleField.state.value;
    const yearValue = this.refs.yearField.state.value;
    const genreValue = this.refs.genreField.state.value;
    const summaryValue = this.refs.summaryField.state.value;

    _validateTitleField();
    _validateYearField();
    _validateGenreField();

    if (
      _validateTitleField() &&
      _validateYearField() &&
      _validateGenreField()
    ) {
      const newMovie = {
        id: id,
        title: _capitalizeFirstLetter(titleValue),
        year: parseInt(yearValue, 10),
        genre: genreValue,
        summary: summaryValue
      };

      this.props.addNewMovie(newMovie);
      alert(
        `Success! The movie "${newMovie.title}" will be added to the list.`
      );
      document.getElementById('add-new-movie-form').reset();

      function _capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    }

    function _validateTitleField() {
      if (titleValue === '') {
        alert('Title must be unique');
        return;
      } else if (
        movies.filter(
          movie => movie.title.toLowerCase() === titleValue.trim().toLowerCase()
        ).length === 1
      ) {
        alert('Title must be filled out, also should be unique');
        return;
      }
      return true;
    }
    function _validateYearField() {
      if (yearValue === '') {
        alert('Year must be filled out');
        return;
      } else if (!/^\d{4}$/.exec(yearValue)) {
        alert('Year must contain four digits e.g. 1992');
        return;
      }

      return true;
    }
    function _validateGenreField() {
      if (genreValue === '') {
        alert('Genre must be filled out, please choose one');
        return;
      }

      return true;
    }
  }
}
