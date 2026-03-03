import { Routes, Route, Navigate } from 'react-router-dom';
import { CartListPage } from '@/pages/CartListPage';
import { CartDetailPage } from '@/pages/CartDetailPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { paths } from '@/routes/paths';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={paths.cartList} element={<CartListPage />} />
      <Route path={paths.cartDetail(':id')} element={<CartDetailPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};