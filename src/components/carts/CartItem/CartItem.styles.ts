import styled from '@emotion/styled';

export const Card = styled.article`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  padding: 1.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  background: #ffffff;
  transition: all 200ms ease;
  cursor: pointer;

  &:hover {
    border-color: #3b82f6;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.875rem;
    padding: 1rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  
  @media (max-width: 640px) {
    justify-content: center;
    text-align: center;
    gap: 0.375rem;
  }
`;

export const CartId = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

export const UserId = styled.span`
  font-size: 0.75rem;
  color: #64748b;
`;

export const DiscountBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #ffffff;
  background: #22c55e;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  white-space: nowrap;

  @media (max-width: 640px) {
    font-size: 0.6875rem;
    padding: 0.1875rem 0.4rem;
  }
`;

export const Meta = styled.div`
  display: flex;
  gap: 1rem;
  color: #64748b;
  font-size: 0.875rem;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    justify-content: center;
    text-align: center;
    gap: 0.75rem;
  }
`;

export const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.125rem;
    font-size: 0.8125rem;
  }
`;

export const ProductsPreview = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.25rem;
  flex-wrap: wrap;
  
  @media (max-width: 640px) {
    justify-content: center;
    overflow-x: auto;
    padding-bottom: 0.25rem;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ProductDot = styled.div<{ $color?: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $color }) => $color ?? '#cbd5e1'};
  flex-shrink: 0;
  
  @media (max-width: 640px) {
    width: 10px;
    height: 10px;
  }
`;

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  justify-content: center;
  padding-left: 1rem;
  border-left: 1px solid #e2e8f0;

  @media (max-width: 640px) {
    align-items: center;
    text-align: center;
    padding-left: 0;
    border-left: none;
    border-top: 1px dashed #e2e8f0;
    padding-top: 0.75rem;
    margin-top: 0.25rem;
  }
`;

export const Total = styled.strong`
  font-size: 1.25rem;
  color: #0f172a;
  font-weight: 700;
  white-space: nowrap;
  
  @media (max-width: 640px) {
    font-size: 1.375rem;
  }
`;

export const OriginalPrice = styled.span`
  font-size: 0.875rem;
  color: #94a3b8;
  text-decoration: line-through;
  font-weight: 400;
  white-space: nowrap;
`;

export const DiscountedPrice = styled.strong`
  font-size: 1.25rem;
  color: #0f172a;
  font-weight: 700;
  white-space: nowrap;
  
  @media (max-width: 640px) {
    font-size: 1.375rem;
  }
`;

export const SavingsText = styled.span`
  font-size: 0.75rem;
  color: #22c55e;
  font-weight: 500;
  white-space: nowrap;
  
  @media (max-width: 640px) {
    font-size: 0.8125rem;
  }
`;

export const MobileDivider = styled.div`
  display: none;
  
  @media (max-width: 640px) {
    display: block;
    height: 1px;
    background: linear-gradient(to right, transparent, #e2e8f0, transparent);
    margin: 0.25rem 0;
  }
`;

export const ContentGrid = styled.div`
  display: contents;
  
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;