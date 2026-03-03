import styled from '@emotion/styled';

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-top: 2rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 1rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  font-size: 0.875rem;
`;

export const Label = styled.span`
  color: #64748b;
`;

export const Value = styled.span`
  font-weight: 500;
  color: #0f172a;
`;

export const DiscountRow = styled(Row)<{ $isDiscount?: boolean }>`
  color: #22c55e;
  
  span:last-of-type {
    color: #22c55e;
    font-weight: 600;
  }
`;

export const TotalRow = styled(Row)`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #e2e8f0;
  font-size: 1.125rem;
`;

export const TotalLabel = styled(Label)`
  font-weight: 600;
  color: #0f172a;
`;

export const TotalValue = styled(Value)`
  font-weight: 700;
  color: #0f172a;
  font-size: 1.25rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const CheckoutButton = styled.button`
  flex: 1;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: #3b82f6;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 150ms ease;
  min-width: 200px;

  &:hover:not(:disabled) {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ContinueButton = styled.button`
  flex: 1;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: #475569;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 150ms ease;
  min-width: 200px;

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
`;