import { useState } from 'react';
import { type CartProduct } from '@/api/carts/carts.types';
import { formatCurrency } from '@/utils/format';
import * as S from './ProductRow.styles';

interface ProductRowProps {
  product: CartProduct;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
  disabled?: boolean;
}

export const ProductRow = ({ 
  product, 
  onQuantityChange, 
  onRemove, 
  disabled 
}: ProductRowProps) => {
  const [localQty, setLocalQty] = useState(product.quantity);

  const discountAmount = product.total * (product.discountPercentage / 100);
  const discountedTotal = product.total - discountAmount;
  const hasDiscount = product.discountPercentage > 0;

  const handleBlur = () => {
    const qty = Math.max(0, localQty || 0);
    if (qty !== product.quantity) {
      onQuantityChange(qty);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      (e.target as HTMLInputElement).blur();
    }
    if (e.key === 'Escape') {
      setLocalQty(product.quantity);
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <S.Row>
      <S.ProductInfo>
        {product.thumbnail && (
          <S.Thumbnail 
            src={product.thumbnail} 
            alt={product.title}
            loading="lazy"
          />
        )}
        <S.Title>{product.title}</S.Title>
        {hasDiscount && (
          <span style={{ 
            fontSize: '0.75rem', 
            color: '#22c55e',
            background: 'rgba(34, 197, 94, 0.1)',
            padding: '0.125rem 0.5rem',
            borderRadius: '0.25rem'
          }}>
            -{product.discountPercentage}%
          </span>
        )}
      </S.ProductInfo>

      <S.Price>
        {formatCurrency(product.price)}
        {hasDiscount && (
          <div style={{ fontSize: '0.75rem', color: '#22c55e' }}>
            {formatCurrency(product.price * (1 - product.discountPercentage / 100))} 
            {' '}with discount
          </div>
        )}
      </S.Price>

      <S.QuantityControl>
        <S.QuantityInput
          type="number"
          min="0"
          value={localQty}
          onChange={(e) => {
            setLocalQty(Number(e.target.value))
          }}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-label={`Quantity for ${product.title}`}
        />
      </S.QuantityControl>

      <S.ItemTotal>
        {formatCurrency(hasDiscount ? discountedTotal : product.total)}
        {hasDiscount && (
          <div style={{ 
            fontSize: '0.75rem', 
            color: '#94a3b8', 
            textDecoration: 'line-through' 
          }}>
            {formatCurrency(product.total)}
          </div>
        )}
      </S.ItemTotal>

      <S.Actions>
        <S.RemoveBtn 
          onClick={onRemove}
          disabled={disabled}
          aria-label={`Remove ${product.title}`}
          type="button"
        >
          ✕
        </S.RemoveBtn>
      </S.Actions>
    </S.Row>
  );
};