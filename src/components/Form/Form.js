import React from 'react';
import TitleField from './TitleField';
import YearField from './YearField';
import GenreField from './GenreField';
import SummaryField from './SummaryField';
import SubmitButtonField from './SubmitButtonField';

import '../../form-style.css';

export default class Form extends React.Component {
  validateForm() {}

  render() {
    return (
      <div className="formContainer">
        <form
          id="add-new-movie-form"
          action="#"
          method="post"
          name="add-new-movie-form"
          onSubmit={this.validateForm}
          noValidate
        >
          <ul>
            <li>
              <h2>Add New Movie</h2>
              <span className="required-notification">
                * Denotes Required Field
              </span>
            </li>
            <TitleField />
            <YearField />
            <GenreField />
            <SummaryField />
            <SubmitButtonField />
          </ul>
        </form>
      </div>
    );
  }
}
