import { useMemo } from 'react';
import styled from '@emotion/styled';

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const Button = styled.button<{ $active?: boolean; $disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ $active, $disabled }) => {
    if ($disabled) return '#94a3b8';
    if ($active) return '#ffffff';
    return '#475569';
  }};
  background: ${({ $active, $disabled }) => {
    if ($disabled) return '#f1f5f9';
    if ($active) return '#3b82f6';
    return '#ffffff';
  }};
  border: 1px solid ${({ $active, $disabled }) => {
    if ($disabled) return '#e2e8f0';
    if ($active) return '#3b82f6';
    return '#e2e8f0';
  }};
  border-radius: 0.375rem;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 150ms ease;

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? '#2563eb' : '#f8fafc')};
    border-color: ${({ $active }) => ($active ? '#2563eb' : '#cbd5e1')};
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Info = styled.span`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0 1rem;
  white-space: nowrap;
`;


const getPageNumbers = (
  currentPage: number,
  totalPages: number,
  maxVisible = 5
): (number | string)[] => {
  const pages: (number | string)[] = [];

  if (totalPages <= maxVisible) {

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {

    pages.push(1);

    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage <= 2) {
      end = Math.min(totalPages - 1, maxVisible - 1);
    }

    if (currentPage >= totalPages - 1) {
      start = Math.max(2, totalPages - maxVisible + 2);
    }

    if (start > 2) {
      pages.push('...');
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push('...');
    }

    pages.push(totalPages);
  }

  return pages;
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisible?: number;
  showInfo?: boolean;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 5,
  showInfo = true,
}: PaginationProps) => {
  const pageNumbers = useMemo(
    () => getPageNumbers(currentPage, totalPages, maxVisible),
    [currentPage, totalPages, maxVisible]
  );

  const handlePageChange = (page: number | string) => {
    if (typeof page === 'number') {
      onPageChange(page);
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Container role="navigation" aria-label="Pagination">

      <Button
        onClick={() => { handlePageChange(currentPage - 1); }}
        disabled={currentPage <= 1}
        aria-label="Previous page"
        type="button"
      >
        ←
      </Button>

      {pageNumbers.map((page, index) =>
        page === '...' ? (
          <span key={`ellipsis-${String(index)}`} style={{ color: '#94a3b8', padding: '0 0.25rem' }}>
            ...
          </span>
        ) : (
          <Button
            key={page}
            onClick={() => { handlePageChange(page); }}
            $active={page === currentPage}
            aria-label={`Page ${String(page)}`}
            aria-current={page === currentPage ? 'page' : undefined}
            type="button"
          >
            {page}
          </Button>
        )
      )}

      <Button
        onClick={() => {
          handlePageChange(currentPage + 1)
        }}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
        type="button"
      >
        →
      </Button>

      {showInfo && (
        <Info>
          Page {currentPage} of {totalPages}
        </Info>
      )}
    </Container>
  );
};