import React from 'react';
import ListItem from './components/ListItem';

import './App.css';

export default class App extends React.Component {
  render() {
    let moviesData = this.props.moviesData;

    let listItems = moviesData.map(movieObj => {
      return (
        <ListItem
          key={movieObj.id}
          id={movieObj.id}
          title={movieObj.title}
          year={movieObj.year}
          genre={movieObj.genre}
          summary={movieObj.summary}
          seen={movieObj.seen}
        />
      );
    });

    return <ul id="moviesList">{listItems}</ul>;
  }
}
