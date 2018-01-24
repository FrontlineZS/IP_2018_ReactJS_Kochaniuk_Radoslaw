import React from 'react';

export default class MovieButton extends React.Component {
  render() {
    let className = null;

    if (this.props.isSeen === 'T') {
      className = 'btn btn--seen';
    } else {
      className = 'btn btn--not-seen';
    }

    return (
      <button
        id={`button-${this.props.id}`}
        className={className}
        type="button"
        onClick={this._handleIconChange.bind(this)}
      />
    );
  }

  _handleIconChange() {
    this.props.toggleOnClick(this.props.id);
  }
}
