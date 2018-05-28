import React, { Component } from 'react';
import './App.css';
import Movies from './Components/Movies'

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

  render() {
    return (
      <div className="App">
       Welcome to Blockbuster!
       < Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
