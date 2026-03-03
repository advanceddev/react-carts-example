import styled from '@emotion/styled';

export const Container = styled.main`
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
  background: #f8fafc;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  button {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    color: #475569;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 150ms ease;

    &:hover {
      background: #f1f5f9;
      border-color: #cbd5e1;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
`;

export const Meta = styled.span`
  font-size: 0.875rem;
  color: #64748b;
  margin-left: auto;

  @media (max-width: 640px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;