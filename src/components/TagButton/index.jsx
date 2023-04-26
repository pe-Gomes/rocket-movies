import { Container } from './styles';
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

export function TagButton({ value, isNew, onClick, ...rest  }) {
  return (
    <Container  isNew={isNew} {...rest} >
      <input
        type="text"
        value={value}
        {...rest}
      />

      <button
      type='button'
      onClick={onClick}
      >
        {isNew ? <AiOutlinePlus /> : <AiOutlineClose /> }
      </button>
    </Container>
  );
}