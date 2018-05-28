import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(){
    super();
    this.state = {
     newMovie: {}
    }
  };

  render() {
    return (
      <div>
       <h3>Add Movie</h3>
       <form>
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
