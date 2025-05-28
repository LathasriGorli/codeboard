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
import { Filter } from "./Filter";
import { Pagination } from "../Table/Pagination";
import { ScrollArea } from "../ui/scroll-area";

type DataTableProps = {
  data: any[];
  columns: any[];
  paginationDetails: any;
  height?: string;
  removeSortingForColumnIds?: string[];
};

export function DataTable({
  data,
  columns,
  paginationDetails,
  height,
  removeSortingForColumnIds = [],
}: DataTableProps) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: data || [],
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    filterFns: {},
    initialState: {
      pagination: {
        pageSize: paginationDetails.limit,
      },
    },
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
    <div className="w-auto bg-(--an-table-background) p-2 rounded-lg">
      <div className="overflow-hidden rounded-lg">
          <Table className="border-separate border-spacing-y-0.5">
            <ScrollArea className="rounded-lg" style={{ height : height }}>
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
                      className="text-(--an-table-body-text-color) font-(family-name:--an-table-font-family) text-sm font-normal bg-white"
                    >
                      <div
                        className={
                          !isSortingRemoved && header.column.getCanSort()
                            ? "cursor-pointer select-none flex items-center gap-2"
                            : "flex items-center gap-2"
                        }
                        onClick={
                          !isSortingRemoved ? header.column.getToggleSortingHandler() : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {!isSortingRemoved && (
                          header.column.getIsSorted() === "asc" ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : header.column.getIsSorted() === "desc" ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronsUpDown className="w-4 h-4" />
                          )
                        )}
                      </div>
                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column}/>
                        </div>
                      ) : null}
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
                        className={`font-(family-name:--an-table-font-family)${
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
                    colSpan={columns.length}
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
      <div className="bg-transparent mt-2">
        <Pagination paginationDetails={paginationDetails} table={table}/>
      </div>
    </div>
  );
}