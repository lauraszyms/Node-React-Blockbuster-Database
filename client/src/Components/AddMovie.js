import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(){
    super();
    this.state = {
     newMovie: {}
    }
  };

  handleSubmit(e) {
    let idCounter = this.props.movies.length + 1
    this.setState({newMovie: {
      id: idCounter++,
      title: this.refs.title.value,
      rating: this.refs.rating.value,
      yearOfRelease: this.refs.release.value
    }}, function() {
      // console.log(this.state)
      this.props.addMovie(this.state.newMovie)
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
       <h3>Add Movie</h3>
       <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
         <lable>Title</lable><br/>
         <input type="text" ref="title" />
        </div>
        <div>
         <lable>Rating Between 1-10 </lable><br/>
         <input type="text" ref="rating" />
        </div>
        <div>
         <lable>Year of Release</lable><br/>
         <input type="text" ref="release" />
        </div>
        <input type="submit" value="Submit" />
       </form>
      </div>
    );
  }
};

export default AddMovie;