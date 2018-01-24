import React from 'react';

export default class YearField extends React.Component {
  onChange(event) {}

  render() {
    return (
      <li>
        <label htmlFor="year">Year:</label>
        <input
          id="year"
          type="text"
          name="year"
          onChange={this.onChange}
          required
          pattern="^\d{4}$"
        />
      </li>
    );
  }
}
