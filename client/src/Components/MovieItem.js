import React, { Component } from 'react';

class MovieItem extends Component {

  render() {
    return (
      <li className="Movie">
       <strong>{this.props.movie.title}</strong> ({this.props.movie.yearOfRelease})
      </li>
    );
  }
}

export default MovieItem;
