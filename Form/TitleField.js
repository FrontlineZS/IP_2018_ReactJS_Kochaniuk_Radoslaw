import React from 'react';

export default class TitleField extends React.Component {
  onChange(event) {}

  render() {
    return (
      <li>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={this.onChange}
          required
        />
      </li>
    );
  }
}
