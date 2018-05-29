import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieItem extends Component {

  deleteMovie(id) {
    this.props.onDelete(id);
  };

  render() {
    return (
      <li className="Movie">
       <strong>{this.props.movie.title}</strong> ({this.props.movie.yearOfRelease}) <Link to={window.location.pathname} onClick={this.deleteMovie.bind(this, this.props.movie.id)}><small>delete</small></Link>
      </li>
    );
  }
}

export default MovieItem;
