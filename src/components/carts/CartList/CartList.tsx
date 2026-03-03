import { type Cart } from '@/api/carts/carts.types';
import { CartItem } from '../CartItem/CartItem';
import * as S from './CartList.styles';

interface CartListProps {
  carts: Cart[];
  onCartClick: (id: number) => void;
}

export const CartList = ({ carts, onCartClick }: CartListProps) => {
  if (carts.length === 0) {
    return <S.EmptyState>No carts found</S.EmptyState>;
  }

  return (
    <S.List role="list">
      {carts.map((cart) => (
        <CartItem 
          key={cart.id} 
          cart={cart} 
          onClick={() => {
            onCartClick(cart.id)
          }}
        />
      ))}
    </S.List>
  );
};