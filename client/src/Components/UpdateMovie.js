import React, { Component } from 'react';

class EditMovie extends Component {
  constructor(){
    super();
    this.state = {
     updatedMovie: {}
    }
  };

  handleSubmit(e) {
    this.setState({updatedMovie: {
      title: this.refs.title.value,
      rating: this.refs.rating.value,
      yearOfRelease: this.refs.release.value
    }}, function() {
      this.props.updateMovie(this.state.updatedMovie)
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <section id="movies">
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
           <button input type="submit">Save</button>
        </form>
       </section>
      </div>
    );
  }
};

export default EditMovie;
