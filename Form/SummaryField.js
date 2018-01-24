import React from 'react';

export default class SummaryField extends React.Component {
  onChange(event) {}

  render() {
    return (
      <li>
        <label htmlFor="summary">Summary:</label>
        <textarea name="summary" />
      </li>
    );
  }
}
