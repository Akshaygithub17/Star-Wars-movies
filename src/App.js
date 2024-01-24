import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortBy, setSortBy] = useState('episode_id');
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    // Fetch Star Wars movies data from an API
    fetch('https://swapi.dev/api/films/')
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleSelectMovie = movie => {
    setSelectedMovie(movie);
  };

  const handleSortChange = event => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = event => {
    setFilterText(event.target.value);
  };

  const filteredMovies = movies
    .filter(movie => movie.title.toLowerCase().includes(filterText.toLowerCase()))
    .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

  return (
    <div className="app">
      <h1 className="app-title">Star Wars Movies</h1>
      <div className="controls">
        <label htmlFor="sortBy">Sort by:</label>
        <select id="sortBy" onChange={handleSortChange} value={sortBy}>
          <option value="episode_id">Episode</option>
          <option value="release_date">Year</option>
        </select>
        <input
          type="text"
          placeholder="Filter by name"
          onChange={handleFilterChange}
          value={filterText}
        />
      </div>
      <div className="content">
        <div className="left-pane">
          <MovieList movies={filteredMovies} onSelectMovie={handleSelectMovie} />
        </div>
        <div className="right-pane">
          <MovieDetails selectedMovie={selectedMovie} />
        </div>
      </div>
    </div>
  );
};

export default App;