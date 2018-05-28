import React, { Component } from 'react';
import './App.css';
import Movies from './Components/Movies'
import AddMovie from './Components/AddMovie'

class App extends Component {

  constructor(){
    super();
    this.state = {
     movies: []
   }
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

  handleAddMovie(movie) {
    let movies = this.state.movies;
    movies.push(movie);
    this.setState({movies: movies});
  };

  render() {
    return (
      <div className="App">
       Welcome to Blockbuster!
       < Movies movies={this.state.movies} />
       < AddMovie movies={this.state.movies} addMovie={this.handleAddMovie.bind(this)}/>
      </div>
    );
  }
}

export default App;
