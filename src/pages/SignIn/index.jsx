import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import {AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom';

import { Container, Form, BackgroundImg } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

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
        onChange={e => setEmail(e.target.value)}
        />
        <Input
        type='password'
        placeholder='Senha'
        icon={AiOutlineLock}
        onChange={e => setPassword(e.target.value)}
        />
        
        <Button title='Entrar' onClick= {handleSignIn} />
        <Link to="/register" href="#">Criar conta</Link>
      </Form>

        <BackgroundImg />
    </Container>
  );
}