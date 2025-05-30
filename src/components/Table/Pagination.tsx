import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import React, { useCallback } from "react";

export interface DynamicPaginationProps {
  table: any;
  paginationDetails: {
    page: number;
    limit: number;
    total_pages: number;
    total: number;
  };
}

export const Pagination = ({ table, paginationDetails }: DynamicPaginationProps) => {
  const getPageNumbers = () => {
    const currentPage = table.getState().pagination.pageIndex + 1;
    const totalPages = table.getPageCount();
    const maxPagesToShow = 4;
    const pages: (number | string)[] = [];
    
    if (totalPages === 0) {
      return [1];
    }
    
    pages.push(1);

    let startPage = Math.max(2, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(2, endPage - maxPagesToShow + 1);
    }

    if (startPage > 2) {
      pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    if (endPage < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = useCallback((page: number) => {
    const newIndex = page - 1;
    const totalPages = table.getPageCount();
        
    if (newIndex >= 0 && newIndex < totalPages) {
      table.setPageIndex(newIndex);
    } else if (newIndex >= totalPages && totalPages > 0) {
      table.setPageIndex(totalPages - 1);
    } else {
      table.setPageIndex(0);
    }
  }, [table]);

  const pageSize = table.getState().pagination.pageSize;
  const pageIndex = table.getState().pagination.pageIndex;
  const totalRecords = table.getFilteredRowModel().rows.length;

  const firstIndex = totalRecords === 0 ? 0 : pageIndex * pageSize + 1;
  const lastIndex = Math.min(totalRecords, (pageIndex + 1) * pageSize);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-sm text-(--an-pagination-text-color) font-(family-name:--an-pagination-font-family) font-normal">Result per page</span>
        <Select
          value={table.getState().pagination.pageSize.toString()}
          onValueChange={(value) => {
            const newPageSize = Number(value);
            const currentPage = table.getState().pagination.pageIndex;
            const currentFirstRecord = currentPage * pageSize;
            const newPageIndex = Math.floor(currentFirstRecord / newPageSize);
            
            table.setPageSize(newPageSize);
            table.setPageIndex(newPageIndex);
          }}
        >
          <SelectTrigger className="px-2 !h-6 text-xs bg-[#E6E6E6] rounded focus-visible:ring-0 focus-visible:ring-offset-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[25, 50, 100, 150, 200].map((pageSize) => (
              <SelectItem key={pageSize} value={pageSize.toString()} className="py-1 text-xs">
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <span className="text-xs text-(--an-pagination-text-color)">
        {totalRecords === 0 ? "0 of 0" : `${firstIndex} - ${lastIndex} of ${totalRecords}`}
      </span>
      <div className="flex items-center gap-2">
        <button
          className="border rounded h-6 w-16 disabled:opacity-50 text-(--an-pagination-text-color) font-(family-name:--an-pagination-font-family) text-xs font-normal"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          aria-label="Previous page"
        >
          Back
        </button>
        {getPageNumbers().map((page, index) => (
          <React.Fragment key={index}>
            {typeof page === "number" ? (
              <button
                className={`border rounded-full w-6 h-6 text-xs ${
                  table.getState().pagination.pageIndex + 1 === page
                    ? "bg-[#333] text-[#fff]"
                    : "text-(--an-pagination-text-color)"
                }`}
                onClick={() => handlePageChange(page)}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </button>
            ) : (
              <span className="text-sm text-(--an-pagination-text-color)">...</span>
            )}
          </React.Fragment>
        ))}
        <button
          className="border rounded h-6 w-16 disabled:opacity-50 text-(--an-pagination-text-color) font-(family-name:--an-pagination-font-family) text-xs font-normal"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    </div>
  );
};