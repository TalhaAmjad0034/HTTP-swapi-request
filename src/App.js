import React, { useState } from "react";

import Movies from "./Components/Movies";
import "./App.css";
function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchMoviesHandler() {
    setError(false);
    setLoading(true);

    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const transform = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          para: movieData.opening_crawl,
        };
      });
      setMovies(transform);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {
    content = <Movies Data={movies} />;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (loading) {
    content = "Loading...";
  }

  return (
    <div>
      <section className="button">
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section className="moviess">{content}</section>
    </div>
  );
}

export default App;
