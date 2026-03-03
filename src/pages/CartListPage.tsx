import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarts } from '@/features/cart-list/hooks/useCarts';
import { useCartStore } from '@/store/useCartStore';
import { CartList } from '@/components/carts/CartList';
import { Pagination } from '@/components/ui/Pagination';
import { Loader } from '@/components/ui/Loader';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { paths } from '@/routes/paths';
import * as S from './CartListPage.styles';

export const CartListPage = () => {
  const navigate = useNavigate();
  const { pagination, setPagination } = useCartStore();
  
  const skip = useMemo(() => 
    (pagination.page - 1) * pagination.limit, 
    [pagination.page, pagination.limit]
  );

  const { data, isLoading, isError, error } = useCarts({
    limit: pagination.limit,
    skip,
  });

  const handlePageChange = (page: number) => {
    setPagination(page, pagination.limit);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLimitChange = (limit: number) => {
    setPagination(1, limit);
  };

  if (isLoading) return <Loader fullScreen />;
  if (isError) return <ErrorMessage error={error} onRetry={() => {
    window.location.reload()
  }} />;

  return (
    <S.Container>
      <S.Header>
        <h1>Carts</h1>
        <S.LimitSelector>
          <label>Per page:</label>
          <select 
            value={pagination.limit} 
            onChange={(e) => {
              handleLimitChange(Number(e.target.value))
            }}
          >
            {[10, 20, 50].map(limit => (
              <option key={limit} value={limit}>{limit}</option>
            ))}
          </select>
        </S.LimitSelector>
      </S.Header>

      <CartList 
        carts={data?.carts ?? []} 
        onCartClick={(id) => {
          void navigate(paths.cartDetail(id))
        }}
      />

      {data && (
        <Pagination
          currentPage={pagination.page}
          totalPages={Math.ceil(data.total / pagination.limit)}
          onPageChange={handlePageChange}
        />
      )}
    </S.Container>
  );
};