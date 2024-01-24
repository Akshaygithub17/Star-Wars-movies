
import React from 'react';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="movie-list">
      <ul>
        {movies.map(movie => (
          <li key={movie.episode_id} onClick={() => onSelectMovie(movie)}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;