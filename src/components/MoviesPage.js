import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const matching = useRouteMatch()
  return (
    <div>
      <MoviesList movies={movies} />

     <Route exact path={matching.url}>
       <h3>Choose  movie above</h3>
     </Route>

      <Route to = {`${matching.url}/:movieId`}>
         <MovieShow movies = {movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;
