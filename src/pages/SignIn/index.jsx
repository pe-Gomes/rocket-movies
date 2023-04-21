import {AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom';

import { Container, Form, BackgroundImg } from './styles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
        type='email'
        placeholder='E-mail'
        icon={AiOutlineMail}
        />
        <Input
        type='password'
        placeholder='Senha'
        icon={AiOutlineLock}
        />
        
        <Button title='Entrar'/>
        <Link to="/register" href="#">Criar conta</Link>
      </Form>

        <BackgroundImg />
    </Container>
  );
}