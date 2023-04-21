import {AiOutlineLock, AiOutlineMail, AiOutlineUser, AiOutlineArrowLeft } from 'react-icons/ai'

import { Container, Form, BackgroundImg, Return } from './styles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextButton } from '../../components/TextButton'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
        type='text'
        placeholder='Nome'
        icon={AiOutlineUser}
        />

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
        
        <Button title='Cadastrar'/>
        <Return to="/" >
          <TextButton title='Voltar para o Login' icon={AiOutlineArrowLeft} />
        </Return>
      </Form>

        <BackgroundImg />
    </Container>
  );
}