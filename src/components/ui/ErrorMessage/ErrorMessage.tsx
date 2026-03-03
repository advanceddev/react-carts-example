import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: 2rem;
  text-align: center;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  margin: 1rem;
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #dc2626;
  margin: 0 0 0.5rem 0;
`;

const Message = styled.p`
  font-size: 0.875rem;
  color: #991b1b;
  margin: 0 0 1.5rem 0;
  max-width: 400px;
  line-height: 1.5;
`;

const RetryButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  background: #dc2626;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 150ms ease;

  &:hover {
    background: #b91c1c;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

interface ErrorMessageProps {
  error?: string | Error;
  onRetry?: () => void;
  title?: string;
}

export const ErrorMessage = ({ error, onRetry, title = 'Something went wrong' }: ErrorMessageProps) => {
  const errorMessage = error instanceof Error ? error.message : String(error);

  return (
    <Container role="alert">
      <Icon>⚠️</Icon>
      <Title>{title}</Title>
      <Message>{errorMessage || 'An unexpected error occurred'}</Message>
      {onRetry && (
        <RetryButton onClick={onRetry} type="button">
          🔄 Try Again
        </RetryButton>
      )}
    </Container>
  );
};