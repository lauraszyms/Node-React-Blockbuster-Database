import React, { Component } from 'react';
import MovieItem from './MovieItem';

class Movies extends Component {
  deleteMovie(id) {
    this.props.onDelete(id);
  };

  render() {
    function compare(a,b) {
       if (a.title < b.title)
        return -1;
       if (a.title > b.title)
        return 1;
      return 0;
    };

    let movieItems;
    if (this.props.movies) {
      movieItems = this.props.movies.sort(compare).map((movie, index) => {
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
