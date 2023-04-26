import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import {AiOutlineLock, AiOutlineMail, AiOutlineUser, AiOutlineArrowLeft } from 'react-icons/ai'

import { Container, Form, BackgroundImg, Return } from './styles';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextButton } from '../../components/TextButton'

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp () {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos para se cadastrar.")
    }
    
    api.post("/users", { name, email, password })
      .then ( ()=> {
        alert("Usuário cadastrado com sucesso")
        navigate("/");
      })
      .catch (error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar o usuário.")
        }
      })
  }

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
        onChange={ e => setName(e.target.value)}
        />

        <Input
        type='email'
        placeholder='E-mail'
        icon={AiOutlineMail}
        onChange={ e => setEmail(e.target.value)}
        />
        <Input
        type='password'
        placeholder='Senha'
        icon={AiOutlineLock}
        onChange={ e => setPassword(e.target.value)}
        />
        
        <Button title='Cadastrar' onClick={handleSignUp} />
        <Return to="/" >
          <TextButton title='Voltar para o Login' icon={AiOutlineArrowLeft} />
        </Return>
      </Form>

        <BackgroundImg />
    </Container>
  );
}