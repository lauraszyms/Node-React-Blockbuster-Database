import React, { Component } from 'react';
import MovieItem from './MovieItem';

class Movies extends Component {

  render() {
    let movieItems;
    if (this.props.movies) {
      movieItems = this.props.movies.map(movie => {
        console.log(movie)
        return < MovieItem key={movie.id} movie={movie} />
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
