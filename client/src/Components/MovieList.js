import React, { Component } from 'react';
import MovieItem from './MovieItem';
import Movies from './Movies'
import { Link } from 'react-router-dom';
import AddMovie from './AddMovie'
import Pagination from "react-js-pagination";


class MovieList extends Component {
    constructor(){
      super();
      this.state = {
       movies: [],
       activePage: 1
     };
    };

    getMovies() {
      fetch('http://localhost:5000/api/movies')
        .then(res => res.json())
        .then(movies => this.setState({movies: movies}))
    };

    componentWillMount() {
     this.getMovies();
    };

    componentDidMount() {
      this.getMovies();
    };

    handlePageChange(pageNumber) {
     console.log(`active page is ${pageNumber}`);
     this.setState({activePage: pageNumber});
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
        let movies = this.state.movies;
        movies.push(movie);
        this.setState({movies: movies});
      };

    handleDeleteMovie(id) {
      fetch('http://localhost:5000/api/movies' + '/' + id, {
        method: 'delete'
      }).then(response => response.json())
       .catch(err => err);
      let movies = this.state.movies;
      let index = movies.findIndex(i => i.id === id);
      movies.splice(index, 1);
      this.setState({movies: movies});
    };


  render() {

    return (
      <div className="movie-list">
        <section id="movies">
          <div className="container">
            <div className="row">
             <div className="wow fadeInUp col-md-15 col-sm-15" data-wow-delay="1.6s">
              <h1> Blockbuster Video Database </h1><br/>
              < Movies movies={this.state.movies} onDelete={this.handleDeleteMovie.bind(this)}/>
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange.bind(this)}
               />
             </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default MovieList;
