import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

function NotFound() {
  return <h1>Page Not Found</h1>
}

ReactDOM.render(
  <Router> 
    <Switch>
      <Route path='/' component={MovieList} exact ></Route>
      <Route path='/movies/:id' component={Movie} ></Route>
      <Route component ={NotFound} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
