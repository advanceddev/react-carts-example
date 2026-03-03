import styled from '@emotion/styled';

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px 120px 120px 40px;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  background: #ffffff;
  transition: all 200ms ease;

  &:hover {
    border-color: #cbd5e1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    text-align: center;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  flex-shrink: 0;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #0f172a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.div`
  font-size: 0.875rem;
  color: #475569;
  font-weight: 500;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  text-align: center;
  transition: all 150ms ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:disabled {
    background: #f1f5f9;
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Remove spinner arrows */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const ItemTotal = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #0f172a;
  text-align: right;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RemoveBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  font-size: 1rem;
  color: #64748b;
  background: transparent;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 150ms ease;

  &:hover:not(:disabled) {
    color: #ffffff;
    background: #ef4444;
    border-color: #ef4444;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;