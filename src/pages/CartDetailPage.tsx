import { useParams, useNavigate } from 'react-router-dom';
import { useCartDetail, useUpdateCart } from '@/features/cart-detail/hooks/useCartDetail';
import { ProductRow } from '@/components/carts/ProductRow/ProductRow'
import { CartSummary } from '@/components/carts/CartSummary';
import { Loader } from '@/components/ui/Loader';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { paths } from '@/routes/paths';
import * as S from './CartDetailPage.styles';

export const CartDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const cartId = Number(id);
  const { data: cart, isLoading, isError } = useCartDetail(cartId);
  const { mutate: updateCart, isPending } = useUpdateCart(cartId);

  const handleQuantityChange = (productId: number, quantity: number) => {
    if (quantity < 0) return;
    
    updateCart({
      merge: true,
      products: [{ id: productId, quantity }],
    });
  };

  const handleRemoveProduct = (productId: number) => {
    updateCart({
      merge: true,
      products: [{ id: productId, quantity: 0 }],
    });
  };

  if (isLoading) return <Loader fullScreen />;
  if (isError || !cart) return <ErrorMessage error="Cart not found" onRetry={() => {
    void navigate(paths.cartList)
  }} />;

  return (
    <S.Container>
      <S.Header>
        <button onClick={() => {
          void navigate(-1)
        }}>← Back</button>
        <S.Meta>Cart #{cart.id}</S.Meta>
        <S.Meta>User ID: {cart.userId}</S.Meta>
      </S.Header>

      <S.ProductsList>
        {cart.products.map((product) => (
          <ProductRow
            key={product.id}
            product={product}
            onQuantityChange={(qty) => {
              handleQuantityChange(product.id, qty)
            }}
            onRemove={() => {
              handleRemoveProduct(product.id)
            }}
            disabled={isPending}
          />
        ))}
      </S.ProductsList>

      <CartSummary 
        total={cart.total} 
        discountedTotal={cart.discountedTotal}
      />
    </S.Container>
  );
};