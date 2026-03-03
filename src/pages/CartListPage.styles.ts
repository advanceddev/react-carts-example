import styled from '@emotion/styled';

export const Container = styled.main`
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
  background: #f8fafc;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
`;

export const LimitSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 500;
  }

  select {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    color: #0f172a;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 150ms ease;

    &:hover {
      border-color: #cbd5e1;
    }

    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
  margin-top: 2rem;
`;