import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(){
    super();
    this.state = {
     newMovie: {}
    }
  };

  handleSubmit(e) {
    this.setState({newMovie: {
      title: this.refs.title.value,
      rating: this.refs.rating.value,
      yearOfRelease: this.refs.release.value
    }}, function() {
      this.props.addMovie(this.state.newMovie)
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
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
