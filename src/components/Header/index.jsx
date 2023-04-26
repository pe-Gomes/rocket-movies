import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { useNavigate } from 'react-router-dom';

import { Container, Brand, Search, Profile, Logout } from './styles';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Input } from '../Input';

export function Header({ setSearch, children }) {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut () {
    signOut();
    navigate("/");
  }

  async function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <Container>
      
      <Brand to="/" >
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" 
        onChange={handleSearch}
      />
        {children}
      </Search>

      <div>
        <Logout>
          <strong>{user.name}</strong>
          <button onClick={handleSignOut} >sair</button>
        </Logout>

        <Profile to="/profile" >
          <img src={avatarUrl} alt="Imagem do usuário" />
        </Profile>
      </div>
      
    </Container>
  )
}