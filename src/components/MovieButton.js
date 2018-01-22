import React from 'react';

export default class MovieButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSeen: this.props.isSeen
    };

    this.handleIconChange = this.handleIconChange.bind(this);
  }

  handleIconChange() {
    this.state.isSeen === 'T'
      ? this.setState({ isSeen: 'F' })
      : this.setState({ isSeen: 'T' });
  }

  render() {
    let id = this.props.id;
    let className = null;

    if (this.state.isSeen === 'T') {
      className = 'btn btn--seen';
    } else {
      className = 'btn btn--not-seen';
    }

    return (
      <button
        id={`button-${id}`}
        className={className}
        type="button"
        onClick={this.handleIconChange}
      />
    );
  }
}
