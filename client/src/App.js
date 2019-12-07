import React, { useState } from 'react';
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  const [Movie] = useState();

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/" component={MovieList} />
      <Route
        path="/movies/:movieId"
        render={props => <Movie {...props} movies={movie} />}
      /> 
    </div>
  );
};

export default App;
