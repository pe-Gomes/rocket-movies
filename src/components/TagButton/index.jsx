import { Container } from './styles';

export function TagButton({ icon: Icon, isActive = false, title, ...rest }) {
  return (
    <Container  isActive={isActive}  {...rest}>
      {title}
      {Icon && <Icon />}
    </Container>
  );
}