import styled from '@emotion/styled';

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #f8fafc;
`;

export const Content = styled.div`
  text-align: center;
  max-width: 500px;
`;

export const ErrorCode = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 1rem;
  line-height: 1;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 1rem 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #475569;
  margin: 0 0 2rem 0;
  line-height: 1.625;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const buttonBase = `
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 200ms ease;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

export const BackButton = styled.button`
  ${buttonBase}
  background: #3b82f6;
  color: #ffffff;
  border: 1px solid #3b82f6;

  &:hover {
    background: #2563eb;
    border-color: #2563eb;
  }
`;

export const HomeButton = styled.button`
  ${buttonBase}
  background: transparent;
  color: #0f172a;
  border: 1px solid #e2e8f0;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    border-color: #cbd5e1;
  }
`;