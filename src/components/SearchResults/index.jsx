import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom';

import { Container } from './styles';

export function SearchResults({ setSearch }) {
  const [searchResults, setSearchResults] = useState([]);
  const { user } = useAuth();


  function handleSearchResults() {
    searchResults([]);
  }


  useEffect( () => {
    async function fetchSearchResults() {
      const response = await api.get(`/preview?user_id=${user.id}&title=${setSearch}`);
      setSearchResults(response.data);
    }
    fetchSearchResults();
  }, [setSearch])
  return (
    <Container>
      <strong>Resultados</strong>
      {
        searchResults.map((movie, index) => (
          <Link key={String(index)} to={`/preview/${movie.id}`} onClick={handleSearchResults} >
            {movie.title}
          </Link>
        ))
      }
    </Container>
  )
}