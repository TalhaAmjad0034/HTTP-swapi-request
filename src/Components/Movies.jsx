import React from "react";

import MoviesList from "./MoviesList";

const Movies = (props) => {
  return (
    <div className="movies">
      {props.Data.map((movie) => {
        return (
          <MoviesList key={movie.id} title={movie.title} para={movie.para} />
        );
      })}
    </div>
  );
};

export default Movies;
