import { AiOutlineArrowLeft, AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

import { Container, Form, NewTag, MovieDetails, Submit, Return } from "./styles";

import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TagButton } from "../../components/TagButton";
import { TextArea } from "../../components/TextArea";

export function New( ) {
  return (
    <Container>
      <Header />
      <main>
        <Form>

          <header>
            <Return to="/" >
              <TextButton title="Voltar" icon={AiOutlineArrowLeft} />
            </Return>
            <h1>Novo Filme</h1>
          </header>

          <MovieDetails>
            <Input type="text" placeholder="Título"  />
            <Input type="number" placeholder="Sua nota (de 0 a 5)" />
          </MovieDetails>

          <TextArea placeholder="Observações" />

          <h2>Marcadores</h2>
          <NewTag >
            <TagButton title="Action" icon={AiOutlineClose} isActive />
            <TagButton title="Novo Marcador" icon={ AiOutlinePlus } />
          </NewTag>
          
          <Submit>
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações" />
          </Submit>
        </Form>
      </main>
    </Container>
  );
}

