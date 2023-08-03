import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainSearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchTerm('');
    navigate(`/search?query=${searchTerm}`);
  }

  return (
    <div className="main-search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input 
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button type="submit"></button>
      </form>
    </div>
  )
};

export default MainSearchBar;
