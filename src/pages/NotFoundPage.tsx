import { Link } from 'react-router-dom';
import { paths } from '@/routes/paths';
import {
  Container,
  Content,
  ErrorCode,
  Title,
  Description,
  Actions,
  BackButton,
  HomeButton,
} from './NotFoundPage.styles';

export const NotFoundPage = () => {
  return (
    <Container>
      <Content>
        <ErrorCode>404</ErrorCode>
        <Title>Page Not Found</Title>
        <Description>
          The page you're looking for doesn't exist or has been moved.
        </Description>
        <Actions>
          <Link to={paths.cartList}>
            <BackButton>
              ← Back to Carts
            </BackButton>
          </Link>
          <a href={window.location.origin}>
            <HomeButton>
              Go Home
            </HomeButton>
          </a>
        </Actions>
      </Content>
    </Container>
  );
};