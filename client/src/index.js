import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Movies from './Components/Movies';
import MovieList from './Components/MovieList';
import MovieItem from './Components/MovieItem';
import { BrowserRouter, Route } from 'react-router-dom'




ReactDOM.render(

  <BrowserRouter>
    <div>
     <Route exact path="/" component={App}/>
     <Route exact path="/movie-list" component={MovieList}/>
     <Route exact path="/movie-items" component={MovieItem}/>
    </div>
  </BrowserRouter>,

  document.getElementById('root')
);
