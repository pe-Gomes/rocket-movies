import { useState } from "react";
import { api } from '../../services/api';
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { Container, Form, NewTag, MovieDetails, Submit, Return } from "./styles";

import { SearchResults } from "../../components/SearchResults";
import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TagButton } from "../../components/TagButton";
import { TextArea } from "../../components/TextArea";

export function New( ) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [search, setSearch] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  async function handleNewMovieNote() {
    if (!title || !tags) {
      return alert("Preencha os campos do título, da nota e marcadores para cadastrar o filme.")
    }

    if (newTag) {
      return alert("Existem marcadores que ainda não foram adicionados. Clique para adicionar ou deixe o campo vazio.")
    }
    
    await api.post("/preview", {
      title,
      description,
      rating,
      tags
    });
    
    alert(`Nota do filme ${title} foi criada com sucesso.`)
    navigate(-1);
  }

  function handleNewTag(){
    setTags( prevState => [...prevState, newTag])
    setNewTag("");
  }

  function handleDeleteTag(deleted) {
    setTags( prevState => prevState.filter(tag => tag !== deleted) );
  }

  return (
    <Container>
      <Header setSearch={setSearch}>
        {search && <SearchResults setSearch={search}/>}
      </Header>
      <main>
        <Form>

          <header>
            <Return to="/" >
              <TextButton title="Voltar" icon={AiOutlineArrowLeft} />
            </Return>
            <h1>Novo Filme</h1>
          </header>

          <MovieDetails>
            <Input type="text" placeholder="Título" onChange={e => setTitle(e.target.value)}  />
            <Input type="number" placeholder="Sua nota (de 0 a 5)" onChange={e => setRating(e.target.value)} />
          </MovieDetails>

          <TextArea placeholder="Observações" onChange={e => setDescription(e.target.value)} />

          <h2>Marcadores</h2>
          <NewTag >
            {
              tags.map( (tag, index) => (
                <TagButton
                  key={String(index)}
                  value={tag}
                  onClick={ () => handleDeleteTag(tag)}     
                />
              ))
            }
            <TagButton
            isNew
            placeholder="Novo marcador"
            value={newTag}
            onClick={handleNewTag}
            onChange={e => setNewTag(e.target.value)}
            />
          </NewTag>
          
          <Submit>
            <Button title="Salvar alterações" onClick={handleNewMovieNote} />
          </Submit>
        </Form>
      </main>
    </Container>
  );
}

