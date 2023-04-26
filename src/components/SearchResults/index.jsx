import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Link, useNavigate } from 'react-router-dom';

import { Container } from './styles';

export function SearchResults({ setSearch }) {
  const [searchResults, setSearchResults] = useState([]);
  const { user } = useAuth();

  const navigate = useNavigate();

  async function handleSearchLinks(id) {
    const linkState = navigate(`/preview/${id}`)
    linkState
  }

  async function handleSearchResults(id) {
    handleSearchLinks(id)
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
          <a 
            key={String(index)}
            onClick={ () => handleSearchResults(movie.id)}
          >
            {movie.title}
          </a>
        ))
      }
    </Container>
  )
}