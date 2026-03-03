import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const LoaderContainer = styled.div<{ $fullScreen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ $fullScreen }) => ($fullScreen ? '100vh' : '200px')};
  width: 100%;
  background: ${({ $fullScreen }) => ($fullScreen ? 'rgba(255, 255, 255, 0.8)' : 'transparent')};
  ${({ $fullScreen }) =>
    $fullScreen &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9999;
    `}
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #e2e8f0;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

const Text = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #64748b;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface LoaderProps {
  fullScreen?: boolean;
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Loader = ({ fullScreen = false, text, size = 'md' }: LoaderProps) => {
  const sizeMap = {
    sm: '24px',
    md: '40px',
    lg: '60px',
  };

  return (
    <LoaderContainer $fullScreen={fullScreen}>
      <LoaderWrapper>
        <Spinner style={{ width: sizeMap[size], height: sizeMap[size] }} />
        {text && <Text>{text}</Text>}
      </LoaderWrapper>
    </LoaderContainer>
  );
};