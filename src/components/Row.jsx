import React, { useState, useEffect } from 'react';
import { api, imageUrl } from '../api';
import { useNavigate } from 'react-router-dom';
import './Row.css'; // We will add CSS later

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                onClick={() => navigate(`/watch/${movie.media_type === 'tv' ? 'tv' : 'movie'}/${movie.id}`)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={imageUrl(isLargeRow ? movie.poster_path : movie.backdrop_path)}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;