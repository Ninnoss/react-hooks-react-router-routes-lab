import React from 'react';
import { movies } from '../data';

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.time}>
            <h2>Name: {movie.title}</h2>
            <p>Time: {movie.time}</p>

            <h3>Genres</h3>
            <ul>
              {movie.genres.map((genre) => {
                return <li key={genre}>{genre}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
