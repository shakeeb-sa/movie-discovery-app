import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api, imageUrl } from '../api';
import './SearchPage.css';

// You need your API Key here again or import it securely
const API_KEY = import.meta.env.VITE_TMDB_KEY;

const SearchPage = () => {
  const { query } = useParams(); // Get the "batman" from URL
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSearch() {
      // Endpoint: /search/multi searches for both TV and Movies
      const request = await api.get(`/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
      setResults(request.data.results);
    }
    fetchSearch();
  }, [query]);

  return (
    <div className="searchPage">
      <h2>Results for: "{query}"</h2>
      
      <div className="searchPage__grid">
        {results.map((item) => (
          // Only show items with a poster
          item.poster_path && (
            <div 
              key={item.id} 
              className="searchPage__card"
              onClick={() => navigate(`/watch/${item.media_type || 'movie'}/${item.id}`)}
            >
              <img 
                src={imageUrl(item.poster_path)} 
                alt={item.title || item.name} 
              />
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default SearchPage;