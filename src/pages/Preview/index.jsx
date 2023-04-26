import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { AiOutlineArrowLeft,  AiOutlineClockCircle} from 'react-icons/ai';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Return, MovieText, Stars, UserPost } from './styles';

import { SearchResults } from "../../components/SearchResults";
import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton';
import { Rating } from '../../components/Rating';
import { Tags } from '../../components/Tags';
import { Button } from '../../components/Button';

export function Preview() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  
  const { user } = useAuth();
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const params = useParams();
  const navigate = useNavigate();
  
  function handleBack() {
    navigate(-1);
  }

  async function handleDeleteMovie(){
    const confirm = window.confirm("Você realmente deseja remover o filme?")

    if(confirm) {
      await api.delete(`/preview/${params.id}`);
      navigate(-1);
    }
    return
  }

  useEffect( () => {
    async function fetchMovies() {
      const response = await api.get(`/preview/${params.id}`);
      setData(response.data);
    }
    fetchMovies();
  })

  return (
    <Container>
      <Header setSearch={setSearch}>
        {search && <SearchResults setSearch={search}/>}
      </Header>
      {
         data &&
        <main>
        <Return >
          <TextButton icon={AiOutlineArrowLeft} title="Voltar" onClick={handleBack} />
        </Return>
        
        <MovieText>
          <h2>{data.title}</h2>
          
          <Stars>
            {
              [1, 2, 3, 4, 5].map( (rating, index) => (
                <Rating isActive={rating <= data.rating} key={index} />
              ))
            }
          </Stars>
        </MovieText>

        <UserPost>
          <img src={avatarUrl} alt="Imagem do usuário" />
          <span>Por {user.name} </span>
          <AiOutlineClockCircle />
          <span></span>
        </UserPost>

        <div>
          <Tags title="Ficção Científica"/>
          <Tags title="Drama"/>
          <Tags title="Família"/>
        </div>

        <p>{data.description}</p>

        <Button title="Excluir filme" onClick={handleDeleteMovie} />
        </main>
      }

    </Container>
  )
}