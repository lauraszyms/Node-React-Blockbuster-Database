import React, { Component } from 'react';
import MovieItem from './MovieItem';
import Movies from './Movies'
import { Link } from 'react-router-dom';
import AddMovie from './AddMovie'



class MovieList extends Component {
    constructor(){
      super();
      this.state = {
       movies: []
     };
    };

    getMovies() {
      fetch('http://localhost:5000/api/movies')
        .then(res => res.json())
        .then(movies => this.setState({movies: movies}))
        .catch(err => err);
    };

    componentDidMount() {
      this.getMovies();
    };

    handleAddMovie(movie) {
      fetch('http://localhost:5000/api/movies', {
        method: 'POST',
        mode: 'CORS',
        headers: {
          'Content-Type': 'application/json'
         },
        body: JSON.stringify(movie)
      }).then(res => res.json())
        .catch(err => err);
        this.getMovies();
      };

    handleDeleteMovie(id) {
      fetch('http://localhost:5000/api/movies' + '/' + id, {
        method: 'delete'
      }).then(response => response.json())
       .catch(err => err);
       this.getMovies();
       console.log(this.state.movies)
    };


  render() {

    return (
      <div className="movie-list">
        <section id="movies">
          <div className="container">
            <div className="row">
             <div className="wow fadeInUp col-md-15 col-sm-15">
              <h1> Blockbuster Video Database </h1><br/>
              <Link to="/" className="btn btn-default">Add a Movie</Link>
              <h3>Movies A-Z </h3>
              < Movies movies={this.state.movies} onDelete={this.handleDeleteMovie.bind(this)}/>
             </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default MovieList;
