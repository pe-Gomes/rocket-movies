import { Container } from './styles';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

export function Rating({ isActive = false }) {
  return (
    <Container isActive={isActive}>
        {isActive ? <AiFillStar /> : <AiOutlineStar />}
    </Container>
  );
}