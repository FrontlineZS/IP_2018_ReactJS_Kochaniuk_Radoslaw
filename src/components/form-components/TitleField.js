import React from 'react';

export default class TitleField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      valid: true
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
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={this._onChange.bind(this)}
          required
        />
      </li>
    );
  }
}
