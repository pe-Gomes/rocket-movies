import { Container, Brand, Search, Profile, Logout } from './styles'

import { Input } from '../Input'

export function Header() {
  return (
    <Container>
      
      <Brand to="/" >
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <div>
        <Logout>
          <strong>Pedro Gomes</strong>
          <a href="/">sair</a>  
        </Logout>

        <Profile to="/profile" >
          <img src="https://github.com/pe-gomes.png" alt="Imagem do usuário" />
        </Profile>
      </div>

    </Container>
  )
}