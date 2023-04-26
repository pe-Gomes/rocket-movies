import { useState } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { AiOutlineArrowLeft, AiOutlineCamera, AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Container, Form, Avatar, Return } from './styles';

import { TextButton } from '../../components/TextButton';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
  const { user, updateProfile } = useAuth(); 

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);
  
  async function handleUpdateProfile() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated);
    updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imgPreview = URL.createObjectURL(file);
    setAvatar(imgPreview);
  }
  

  return (
    <Container>
      <Return to="/">
        <TextButton title="Voltar" icon={AiOutlineArrowLeft} />
      </Return>

      <Form>

        <Avatar>
          <img src={avatar} alt="Imagem do usuário" />
          <label htmlFor="avatar">
            <AiOutlineCamera />
          </label>
          <input type="file" id="avatar" onChange={handleChangeAvatar} />
        </Avatar>

        <Input type="text" placeholder={user.name} icon={AiOutlineUser} 
          onChange={ e => setName(e.target.value)}  />
        <Input type="email" placeholder={user.email} icon={AiOutlineMail}
          onChange={ e => setEmail(e.targe.value)}
        />
        <Input type="password" placeholder="Senha atual" icon={AiOutlineLock}
          onChange={ e => setPasswordOld(e.target.value)}
        />
        <Input type="password" placeholder="Nova senha" icon={AiOutlineLock}
          onChange={ e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdateProfile} />
      </Form>
    </Container>
  );
}