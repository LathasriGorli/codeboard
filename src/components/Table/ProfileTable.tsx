import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../ui/table";
import Pagination from "./Pagination";
import { useLocation } from "@tanstack/react-router";
  
  export function ProfileTable({ 
    data, 
    columns,
    getData,
    paginationDetails,
   }: any) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location?.search);

    const table = useReactTable({
      data : data,
      columns : columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
    });

    const capturePageNum = (value: number) => {
      getData({
        ...searchParams,
        limit: searchParams.get("limit")
          ? +(searchParams.get("limit") as string)
          : 25,
        page: value,
        order_by: searchParams.get("order_by"),
        order_type: searchParams.get("order_type"),
      });
    };
  
    const captureRowPerItems = (value: number) => {
      getData({
        ...searchParams,
        limit: value,
        page: 1,
        order_by: searchParams.get("order_by"),
        order_type: searchParams.get("order_type"),
      });
    };

    return (
      <div className="w-full bg-blue-50 p-5">
        <Table className="border-separate border-spacing-y-1.5">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-(--an-table-header-text-color) font-[inter] text-(length:--an-table-text-size) font-medium last:pt-2 last:pb-2  last:pr-2 first:pt-2 first:pb-2 first:pl-2 bg-(--an-table-background) p-0 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg"
                  >
                    <span  className="p-2 w-full block bg-(--an-table-header-background) rounded">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </span>
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="bg-white hover:bg-white">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="text-(length:--an-table-text-size) font-[inter] font-normal px-2 py-2 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="bg-transparent mt-2">
          <Pagination
            paginationDetails={paginationDetails}
            capturePageNum={capturePageNum}
            captureRowPerItems={captureRowPerItems}
          />
        </div>
      </div>
    );
  }
  