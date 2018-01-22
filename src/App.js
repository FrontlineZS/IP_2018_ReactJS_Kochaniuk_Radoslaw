import React from 'react';
import ListItem from './components/ListItem';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // moviesData: null
      moviesData: this.props.moviesData
    };
  }

  componentDidMount() {
    if (localStorage.getItem('movies') === null) {
      localStorage.setItem('movies', JSON.stringify(this.state.moviesData));
    } else {
      this.setState({
        moviesData: JSON.parse(localStorage.getItem('movies'))
      });
    }
  }

  render() {
    let moviesData = this.state.moviesData;

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
