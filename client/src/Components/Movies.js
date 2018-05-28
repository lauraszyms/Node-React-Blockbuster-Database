import React, { Component } from 'react';
import MovieItem from './MovieItem';

class Movies extends Component {
  deleteMovie(id) {
    this.props.onDelete(id);
  };

  render() {
    let movieItems;
    if (this.props.movies) {
      console.log(this.props.movies)
      movieItems = this.props.movies.map(movie => {
        return < MovieItem onDelete={this.deleteMovie.bind(this)} key={movie.id} movie={movie} />
      });
    };

    return (
      <div className="Movies">
        {movieItems}
      </div>
    );
  }
};

export default Movies;
