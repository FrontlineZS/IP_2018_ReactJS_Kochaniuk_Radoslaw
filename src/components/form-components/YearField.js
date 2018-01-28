import React from 'react';

export default class YearField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  _onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <li>
        <label htmlFor="year">Year:</label>
        <input
          id="year"
          type="text"
          name="year"
          onChange={this._onChange.bind(this)}
          required
          pattern="^\d{4}$"
        />
      </li>
    );
  }
}
