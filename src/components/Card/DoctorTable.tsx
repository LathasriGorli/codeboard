import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, ChevronsUpDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { ScrollArea } from "../ui/scroll-area";
import { ShowFilter } from "./ShowFilter";
import { Filter } from "./Filter";
import { Pagination } from "../Table/Pagination";
import { SortAsc } from "../icons/SortAsc";
import { SortDesc } from "../icons/SortDesc";

type DataTableProps = {
  data?: any[];
  columns?: any[];
  paginationDetails?: {
    page: number;
    limit: number;
    total_pages: number;
    total: number;
  };
  height?: string;
  removeSortingForColumnIds?: string[];
  showFilters?: boolean;
};
export function DataTable({
  data,
  columns,
  paginationDetails,
  height = "39rem",
  removeSortingForColumnIds = [],
}: DataTableProps) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const table = useReactTable({
    data: data || [],
    columns: columns || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    ...(paginationDetails
      ? { getPaginationRowModel: getPaginationRowModel() }
      : {}),
    filterFns: {},
    initialState: paginationDetails
      ? {
          pagination: {
            pageSize: paginationDetails.limit,
          },
        }
      : {},
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
    autoResetPageIndex: false,
  });
  return (
    <div className="w-full bg-(--an-table-background) p-1 rounded-lg">
      <ShowFilter onclick={() => setShowFilters(!showFilters)} />
      <div className="overflow-hidden rounded-lg">
        <Table className="border-separate border-spacing-y-0.5">
          <ScrollArea className="rounded-lg" style={{ height: height }}>
            <TableHeader className="sticky top-0 z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const isSortingRemoved = removeSortingForColumnIds.includes(
                      header.column.id
                    );
                    return (
                      <TableHead
                        key={header.id}
                        colSpan={header.colSpan}
                        className="text-(--an-table-body-text-color) font-(family-name:--an-table-font-family) text-sm font-medium bg-white p-1"
                      >
                        <div
                          className={
                            !isSortingRemoved && header.column.getCanSort()
                              ? "cursor-pointer select-none flex items-center gap-2"
                              : "flex items-center gap-2"
                          }
                          onClick={
                            !isSortingRemoved
                              ? header.column.getToggleSortingHandler()
                              : undefined
                          }
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {/* {!isSortingRemoved &&
                            (header.column.getIsSorted() === "asc" ? (
                              <SortAsc className="w-2.5 h-2.5 text-green-600" />
                            ) : header.column.getIsSorted() === "desc" ? (
                              <SortDesc className="w-2.5 h-2.5 text-green-600" />
                            ) : (
                              <SortNorm />
                            ))} */}
                          {!isSortingRemoved && (
                            <SortNorm
                            className="w-2.5 h-4"
                            direction={header.column.getIsSorted() as "asc" | "desc" | false}
                            onSortChange={(newDirection) => {
                              header.column.clearSorting();
                              if (newDirection === "asc") {
                                header.column.toggleSorting(false);
                              } else if (newDirection === "desc") {
                                header.column.toggleSorting(true);
                              }
                            }}
                          />
                          )}
                        </div>
                        {header.column.getCanFilter() ? (
                          <div
                            className={`${showFilters ? "h-7" : "h-0"} overflow-hidden transition-all duration-300`}
                          >
                            <Filter column={header.column} />
                          </div>
                        ) : (
                          <div
                            className={`${showFilters ? "h-7" : "h-0"} transition-all duration-300`}
                          />
                        )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    className={`bg-(--an-table-row-background) ${
                      index === 0 &&
                      index === table.getRowModel().rows.length - 1
                        ? "rounded-lg"
                        : index === 0
                          ? "rounded-t-lg"
                          : index === table.getRowModel().rows.length - 1
                            ? "rounded-b-lg"
                            : ""
                    }  text-xs font-normal`}
                  >
                    {row.getVisibleCells().map((cell, cellIndex) => (
                      <TableCell
                        key={cell.id}
                        className={`font-(family-name:--an-table-font-family) p-1 ${
                          index === 0 && cellIndex === 0 ? "rounded-tl-lg" : ""
                        } ${
                          index === 0 &&
                          cellIndex === row.getVisibleCells().length - 1
                            ? "rounded-tr-lg"
                            : ""
                        } ${
                          index === table.getRowModel().rows.length - 1 &&
                          cellIndex === 0
                            ? "rounded-bl-lg"
                            : ""
                        } ${
                          index === table.getRowModel().rows.length - 1 &&
                          cellIndex === row.getVisibleCells().length - 1
                            ? "rounded-br-lg"
                            : ""
                        }`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns?.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </ScrollArea>
        </Table>
      </div>
      {paginationDetails && (
        <div className="bg-transparent p-2">
          <Pagination paginationDetails={paginationDetails} table={table} />
        </div>
      )}
    </div>
  );
}
function SortNorm({
  direction,
  className = "",
  onSortChange,
}: {
  direction: "asc" | "desc" | false;
  className?: string;
  onSortChange?: (newDirection: "asc" | "desc" | false) => void;
}) {
  const isAsc = direction === "asc";
  const isDesc = direction === "desc";

  const handleAscClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSortChange?.(isAsc ? false : "asc");
  };

  const handleDescClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSortChange?.(isDesc ? false : "desc" );
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span onClick={handleAscClick} className="cursor-pointer">
        <SortAsc
          className={`w-2 h-2 ${isAsc ? "text-[#005669]" : ""}`}
        />
      </span>
      <span onClick={handleDescClick} className="cursor-pointer -mt-0.5">
        <SortDesc
          className={`w-2 h-2 ${isDesc ? "text-[#005669]" : ""}`}
        />
      </span>
    </div>
  );
}
