import React from 'react';

export default class SummaryField extends React.Component {
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
        <label htmlFor="summary">Summary:</label>
        <textarea name="summary" onChange={this._onChange.bind(this)} />
      </li>
    );
  }
}
