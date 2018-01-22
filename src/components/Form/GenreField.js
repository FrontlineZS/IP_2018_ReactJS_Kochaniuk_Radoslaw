import React from 'react';

export default class GenreField extends React.Component {
  onChange(event) {}

  render() {
    return (
      <li>
        <label htmlFor="genre">Genre:</label>
        <select id="genre" name="genre" required>
          <option value="" />
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="fiction">Science fiction</option>
          <option value="thiller">Thiller</option>
          <option value="western">Western</option>
        </select>
      </li>
    );
  }
}
