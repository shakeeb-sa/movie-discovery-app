import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react'; // Using lucide-react icons
import './Navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // Stop page refresh
    if (searchTerm) {
      navigate(`/search/${searchTerm}`); // Go to search page
      setSearchTerm(""); // Clear input
    }
  };

  return (
    <div className="navbar">
      <div className="navbar__logo" onClick={() => navigate('/')}>
        NETFLIX CLONE
      </div>

      <form className="navbar__search" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search movies..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <Search color="white" size={20} />
        </button>
      </form>
    </div>
  );
};

export default Navbar;