import React, { Component } from 'react';
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
      <div className="App">
        <section id="movies">
          <div className="container">
            <div className="row">

              <div className="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="1.6s">
               <div className="blog-thumb">
                 <a href="#"><h1>Blockbuster Video Movie List</h1></a>
                 <h3>Recent Additions:</h3>
                 < Movies movies={this.state.movies} onDelete={this.handleDeleteMovie.bind(this)}/>
                 <a href="#" className="btn btn-default">All Movies</a>
                </div>
              </div>

              <div className="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="1s">
                <div className="blog-thumb">
                  <a href="#"><h1>Add a Movie to the Database</h1></a>
                  < AddMovie movies={this.state.movies} addMovie={this.handleAddMovie.bind(this)}/>
                  <a href="#" className="btn btn-default">Add Movie</a>
                </div>
              </div>

           </div>
          </div>
        </section>
      </div>
    );
  }
};

export default App;
