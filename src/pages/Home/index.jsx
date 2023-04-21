import { AiOutlinePlus } from 'react-icons/ai'

import { Link } from 'react-router-dom';

import { Container, Movies, Stars, NewItem } from './styles';

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Rating } from '../../components/Rating'
import { Tags } from '../../components/Tags'

export function Home(){
  return (
    <Container>
      <Header />
      <main>
        <div>
          <h2>Meus filmes</h2>
          <NewItem to="/new" >
            <Button title='Adicionar Filme' icon={AiOutlinePlus} />
          </NewItem>
        </div>
        <Movies>
          <Link to="/preview">Interstellar</Link>

          <Stars>
            <Rating isActive />
            <Rating isActive />
            <Rating isActive />
            <Rating isActive />
            <Rating />
          </Stars>

          <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
          </p>

          <Tags title="Ficção Científica" />
          <Tags title="Drama" />
          <Tags title="Família" />
        </Movies>
        <Movies>
          <Link to="/preview">Interstellar</Link>

          <Stars>
            <Rating isActive />
            <Rating isActive />
            <Rating isActive />
            <Rating isActive />
            <Rating />
          </Stars>

          <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
          </p>

          <Tags title="Ficção Científica" />
          <Tags title="Drama" />
          <Tags title="Família" />
        </Movies>
        <Movies>
          <Link to="/preview">Interstellar</Link>

          <Stars>
            <Rating isActive />
            <Rating isActive />
            <Rating isActive />
            <Rating isActive />
            <Rating />
          </Stars>

          <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
          </p>

          <Tags title="Ficção Científica" />
          <Tags title="Drama" />
          <Tags title="Família" />
        </Movies>
      </main>
    </Container>
  );
}