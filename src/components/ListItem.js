import React from 'react';
import MovieButton from './MovieButton';

export default class ListItem extends React.Component {
  render() {
    return (
      <li id="movie-element">
        <div id={this.props.id} className="container-div">
          <div>
            {this.props.title} -- {this.props.year}
          </div>
          <span>{this.props.genre}</span>
          <p>{this.props.summary}</p>
          <p>
            Have I seen ?{' '}
            <MovieButton id={this.props.id} isSeen={this.props.seen} />
          </p>
        </div>
      </li>
    );
  }
}
