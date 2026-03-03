import { type Cart } from '@/api/carts/carts.types';
import { formatCurrency } from '@/utils/format';
import * as S from './CartItem.styles';

interface CartItemProps {
  cart: Cart;
  onClick: () => void;
}

export const CartItem = ({ cart, onClick }: CartItemProps) => {
  const totalProducts = cart.products.reduce((sum, product) => sum + product.quantity, 0);

  const hasDiscount = cart.discountedTotal < cart.total;
  const discountAmount = hasDiscount ? cart.total - cart.discountedTotal : 0;
  const discountPercent = hasDiscount 
    ? Math.round((discountAmount / cart.total) * 100) 
    : 0;

  const productColors = cart.products.slice(0, 5).map((_, index) => {
    const colors = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6'];
    return colors[index % colors.length];
  });

  return (
    <S.Card onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    }}>

      <S.ContentGrid>
        <S.Info>
          <S.Header>
            <S.CartId>#{cart.id}</S.CartId>
            <span aria-hidden="true">•</span>
            <S.UserId>User #{cart.userId}</S.UserId>
            {hasDiscount && <S.DiscountBadge>-{discountPercent}%</S.DiscountBadge>}
          </S.Header>

          <S.Meta>
            <S.MetaItem>
              <span aria-hidden="true">📦</span>
              <span>{totalProducts} {totalProducts === 1 ? 'item' : 'items'}</span>
            </S.MetaItem>
            <S.MetaItem>
              <span aria-hidden="true">🛍️</span>
              <span>{cart.products.length} {cart.products.length === 1 ? 'product' : 'products'}</span>
            </S.MetaItem>
          </S.Meta>

          <S.ProductsPreview aria-label={`Products in cart: ${String(cart.products.length)}`}>
            {productColors.map((color, index) => (
              <S.ProductDot key={index} $color={color} aria-hidden="true" />
            ))}
            {cart.products.length > 5 && (
              <S.ProductDot 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '0.625rem',
                  color: '#64748b',
                  background: '#f1f5f9'
                }}
              >
                +{cart.products.length - 5}
              </S.ProductDot>
            )}
          </S.ProductsPreview>
        </S.Info>

        <S.MobileDivider aria-hidden="true" />

        <S.TotalWrapper>
          {hasDiscount ? (
            <>
              <S.OriginalPrice aria-label={`Original price: ${formatCurrency(cart.total)}`}>
                {formatCurrency(cart.total)}
              </S.OriginalPrice>
              <S.DiscountedPrice aria-label={`Discounted price: ${formatCurrency(cart.discountedTotal)}`}>
                {formatCurrency(cart.discountedTotal)}
              </S.DiscountedPrice>
              <S.SavingsText>Save {formatCurrency(discountAmount)}</S.SavingsText>
            </>
          ) : (
            <S.Total aria-label={`Total: ${formatCurrency(cart.total)}`}>
              {formatCurrency(cart.total)}
            </S.Total>
          )}
        </S.TotalWrapper>
      </S.ContentGrid>
    </S.Card>
  );
};