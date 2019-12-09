import React, { useState } from 'react';
import ReactDom from "react-dom";
import { Route, Router, Link } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movies from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  const [Movie] = useState();

  return (
    <div className="nav-links">
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} /> 
      <Route path="/movies/:id" component={Movies} />
    </div>
  );
};

export default App;
