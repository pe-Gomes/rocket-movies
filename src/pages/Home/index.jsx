import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { AiOutlinePlus } from 'react-icons/ai';

import { useNavigate } from 'react-router-dom';

import { Container, Movies, Stars, NewItem } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Rating } from '../../components/Rating';
import { Tags } from '../../components/Tags';

export function Home(){
  const [movieNotes, setMovieNotes] = useState([]);
  const [search, setSearch] = useState("");
  const { user } = useAuth();

  const navigate = useNavigate();

  function handleMovieLinks(id) {
    navigate(`/preview/${id}`);
  }
  
  useEffect( () => {
    async function fetchMovieNotes() {
      const response = await api.get(`/preview?user_id=${user.id}&title=${search}`);
      setMovieNotes(response.data);
    }
    fetchMovieNotes();
  }, [search]);
  
  return (
    <Container>
      <Header setSearch={setSearch} />
      <main>
        <div>
          <h2>Meus filmes</h2>
          <NewItem to="/new" >
            <Button title='Adicionar Filme' icon={AiOutlinePlus} />
          </NewItem>
        </div>
        {
          movieNotes && movieNotes.map( (movie, index) => (
            <Movies key={movie.id} >
              <a 
                key={movie.title} 
                onClick={ () => handleMovieLinks(movie.id)} 
              >
                {movie.title}
              </a>
              <Stars key={index}> 
                {
                  // Creates an array of 5 itens to have 5 stars that will activate according to the rating number
                  [1, 2, 3, 4, 5].map( (stars, index) => (
                    <Rating  isActive={ stars <= movie.rating} key={index} />
                  ))
                }
              </Stars>
              <p key={String(movie.description)}>{movie.description}</p>
              { 
                movie.tags.map(tag => (
                  <Tags title={tag.name} key={String(tag.name)} />
                ))
              }
            </Movies>
          ))
        }
      </main>
    </Container>
  );
}