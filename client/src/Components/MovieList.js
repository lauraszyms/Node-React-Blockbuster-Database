import React, { Component } from 'react';
import MovieItem from './MovieItem';
import Movies from './Movies'
import { Link } from 'react-router-dom';
import AddMovie from './AddMovie'
import UpdateMovie from './UpdateMovie'
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



class MovieList extends Component {
    constructor(){
      super();
      this.state = {
       movies: [],
       formModalIsOpen: false,
       updateModalIsOpen: false,
       updateId: 0
     };

     this.openFormModal = this.openFormModal.bind(this);
     this.afterOpenModal = this.afterOpenModal.bind(this);
     this.closeModal = this.closeModal.bind(this);
    };

    openFormModal() {
      this.setState({formModalIsOpen: true});
    };

    afterOpenModal() {
     this.subtitle.style.color = '#f00';
    };

    closeModal() {
      this.setState({formModalIsOpen: false, updateModalIsOpen: false});
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
        .then(() => this.getMovies())
        .catch(err => err);
        this.closeModal();
      };

    handleId(id) {
      this.setState({updateModalIsOpen: true, updateId: id});
    }

    handleUpdateMovie(movie) {
      fetch('http://localhost:5000/api/movies' + '/' + this.state.updateId, {
        method: 'PUT',
        mode: 'CORS',
        headers: {
          'Content-Type': 'application/json'
         },
        body: JSON.stringify(movie)
      }).then(res => res.json())
        .then(() => this.getMovies())
        .catch(err => err);
        this.closeModal();
      };

      handleDeleteMovie(id) {
       fetch('http://localhost:5000/api/movies' + '/' + id, {
         method: 'delete'
       }).then(response => response.json())
         .then(() => this.getMovies())
        .catch(err => err);
     };


  render() {

    return (
      <div className="movie-list">
        <section id="movies">
          <div className="container">
            <div className="row">
             <div className="wow fadeInUp col-md-15 col-sm-15">
              <h1> Blockbuster Video Database </h1><br/>
              <div className="btn btn-default" onClick={this.openFormModal}>Add Movie</div>
              <Modal
                isOpen={this.state.formModalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Form Modal">
                <h2 ref={subtitle => this.subtitle = subtitle}>Add A Movie!</h2>
                < AddMovie movies={this.state.movies} addMovie={this.handleAddMovie.bind(this)}/>
                <button className="btn btn-default" onClick={this.closeModal}>cancel</button>
              </Modal>
              <h3>Movies A-Z </h3>
              < Movies movies={this.state.movies} onDelete={this.handleDeleteMovie.bind(this)} onUpdate={this.handleId.bind(this)}/>
              <Modal
                isOpen={this.state.updateModalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Form Modal">
                <h2 ref={subtitle => this.subtitle = subtitle}>Update this Movie!</h2>
                < UpdateMovie movies={this.state.movies} updateMovie={this.handleUpdateMovie.bind(this)}/>
                <button className="btn btn-default" onClick={this.closeModal}>cancel</button>
              </Modal>
             </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default MovieList;
