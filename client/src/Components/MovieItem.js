import React, { Component } from 'react';

class MovieItem extends Component {

  deleteMovie(id) {
    this.props.onDelete(id);
  };

  render() {
    return (
      <li className="Movie">
       <strong>{this.props.movie.title}</strong> ({this.props.movie.yearOfRelease}) <a href="#" onClick={this.deleteMovie.bind(this, this.props.movie.id)}><small>delete</small></a>
      </li>
    );
  }
}

export default MovieItem;
