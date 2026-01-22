import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Row from './components/Row';
import Watch from './pages/Watch';
import SearchPage from './pages/SearchPage'; // Import the new page
import Navbar from './components/Navbar';    // Import the Navbar
import { requests } from './api';
import './App.css';

// 1. Move Home to its own component (cleaner)
const Home = () => {
  return (
    <div className="home-container" style={{paddingTop: '60px'}}>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      {/* Navbar sits outside Routes so it appears on EVERY page */}
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* The Search Route */}
        <Route path="/search/:query" element={<SearchPage />} />
        
        <Route path="/watch/:type/:id" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;