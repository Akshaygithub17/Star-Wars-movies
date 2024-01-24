import React from 'react';

const MovieDetails = ({ selectedMovie }) => {
  return (
    <div className="movie-details">
      {selectedMovie ? (
        <>
          <h2>{selectedMovie.title}</h2>
          <p>
            <strong>Episode:</strong> {selectedMovie.episode_id}
          </p>
          <p>
            <strong>Director:</strong> {selectedMovie.director}
          </p>
          <p>
            <strong>Producer:</strong> {selectedMovie.producer}
          </p>
          <p>
            <strong>Release Date:</strong> {selectedMovie.release_date}
          </p>
          <p>
            <strong>Opening Crawl:</strong> {selectedMovie.opening_crawl}
          </p>
        </>
      ) : (
        <p>Select a Movie to see details</p>
      )}
    </div>
  );
};

export default MovieDetails;