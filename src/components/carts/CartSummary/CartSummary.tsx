import { formatCurrency } from '@/utils/format';
import * as S from './CartSummary.styles';

interface CartSummaryProps {
  total: number;
  discountedTotal?: number;
  onCheckout?: () => void;
  onContinue?: () => void;
}

export const CartSummary = ({ 
  total, 
  discountedTotal, 
  onCheckout,
  onContinue 
}: CartSummaryProps) => {
  const discount = discountedTotal !== undefined && discountedTotal < total 
    ? total - discountedTotal 
    : 0;

  const finalTotal = discountedTotal ?? total;

  return (
    <S.Container>
      <S.Title>Order Summary</S.Title>

      <S.Row>
        <S.Label>Subtotal</S.Label>
        <S.Value>{formatCurrency(total)}</S.Value>
      </S.Row>

      {discount > 0 && (
        <S.DiscountRow $isDiscount>
          <S.Label>Discount</S.Label>
          <S.Value>-{formatCurrency(discount)}</S.Value>
        </S.DiscountRow>
      )}

      <S.TotalRow>
        <S.TotalLabel>Total</S.TotalLabel>
        <S.TotalValue>{formatCurrency(finalTotal)}</S.TotalValue>
      </S.TotalRow>

      <S.Actions>
        {onContinue && (
          <S.ContinueButton onClick={onContinue} type="button">
            ← Continue Shopping
          </S.ContinueButton>
        )}
        {onCheckout && (
          <S.CheckoutButton onClick={onCheckout} type="button">
            🛒 Proceed to Checkout
          </S.CheckoutButton>
        )}
      </S.Actions>
    </S.Container>
  );
};