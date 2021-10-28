import React from "react";

import "./MoviesList.css";
const MoviesList = (props) => {
  return (
    <div className="cont">
      <h1 className="heading">{props.title}</h1>
      <p className="opening-text">{props.para}</p>
    </div>
  );
};

export default MoviesList;
