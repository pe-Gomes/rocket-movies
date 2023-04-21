import { AiOutlineArrowLeft, AiOutlineCamera, AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';

import { Container, Form, Avatar, Return } from './styles';

import { TextButton } from '../../components/TextButton';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
  return (
    <Container>
      <Return to="/">
        <TextButton title="Voltar" icon={AiOutlineArrowLeft} />
      </Return>

      <Form>

        <Avatar>
          <img src="https://github.com/pe-gomes.png" alt="Imagem do usuário" />
          <label htmlFor="avatar">
            <AiOutlineCamera />
          </label>
          <input type="file" id="avatar" />
        </Avatar>

        <Input type="text" placeholder="Nome" icon={AiOutlineUser} />
        <Input type="email" placeholder="Nome" icon={AiOutlineMail} />
        <Input type="password" placeholder="Senha atual" icon={AiOutlineLock} />
        <Input type="password" placeholder="Nova senha" icon={AiOutlineLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}