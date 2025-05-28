import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical, Eye } from "lucide-react";
import { DataTable } from "../Card/DoctorTable";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import data from './dummy_doctor_data.json';

export type Project = {
    id: number;
    title: string;
    arabic_title: string;
    code: number;
    imgUrl: string;
    img_title: string;
    status: boolean;
    created_on: string;
};

export const columns: ColumnDef<Project>[] = [
  {
  id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-start">
        {table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected() ? (
          <button
            className="h-4.5 w-4.5 flex items-center justify-center text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600"
            onClick={() => table.toggleAllPageRowsSelected(false)}
            aria-label="Deselect all"
          >
            <span className="text-lg font-bold">-</span>
          </button>
        ) : (
          <Checkbox
            className="text-left border-1 border-solid border-(--an-table-checkbox-border-color) shadow-none"
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        )}
      </div>
    ),
    cell: ({ row }) => (
      <Checkbox
        className="text-left border-1 border-solid border-(--an-table-checkbox-border-color) shadow-none"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorFn: (row: any) => row.serial,
    id: "serial",
    header: () => <div>S No</div>,
    cell: ({ row, table }) => {
      const sortedRows = table.getSortedRowModel().rows;
      const globalIndex = sortedRows.findIndex((r: any) => r.id === row.id);
      const serialNumber = globalIndex + 1;
      return (
        <span className="text-base font-normal text-(--an-table-row-text-color)">
        {serialNumber.toString().padStart(2, "0")}
      </span>
      );
    },
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    accessorKey: "title",
    header: () => <div>Title</div>,
    cell: ({ row }) => (
      <div className="text-(--an-table-body-title-text-color) text-sm font-normal">
        {row.getValue("title")}
      </div>
    ),
  },
  {
    accessorKey: "arabic_title",
    header: () => <div className="text-right">Arabic Title</div>,
    cell: ({ row }) => {
      return (
        <div className="text-(--an-table-row-text-color) text-right text-sm font-normal">
          {row.getValue("arabic_title")}
        </div>
      );
    },
    enableColumnFilter: false,
  },
  {
    accessorKey: "code",
    header: () => <div>Code</div>,
    cell: ({ row }) => {
      return (
        <div className="text-(--an-table-row-text-color) text-sm font-normal">
          {row.getValue("code")}
        </div>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      const rowValue = String(row.getValue(columnId));
      const filterText = String(filterValue);
      return rowValue.startsWith(filterText);
    }
  },
  {
    accessorKey: "img_title",
    header: () => <div>Image</div>,
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center w-40">
          <img
            src={row.original.imgUrl}
            className="w-6 h-6 object-cover border"
          />
          <div className="text-(--an-table-row-text-color) text-sm font-normal">
            {row.getValue("img_title")}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div>Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("status") as boolean;  
      return (
        <Button
          className={`rounded-xl font-normal text-sm p-3 h-5 bg-white
            ${status === true ? "bg-(--an-table-active-background) text-(--an-table-active-text-color) hover:bg-(--an-table-active-background)" : "bg-(--an-table-inactive-background) text-(--an-table-inactive-text-color) hover:bg-(--an-table-inactive-background)"}`}
        >
          {status === true ? 'Active' : (status === false ? 'Inactive' : '')}
        </Button>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId);
      const filter = filterValue.toLowerCase();
      if ("active".startsWith(filter) && value === true) {
        return true;
      }
      if ("inactive".startsWith(filter) && value === false) {
        return true;
      }
      return false;
    },
    meta: {
      filterVariant: "select",
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
      ]
    }
  },
  {
    accessorKey: "created_on",
    header: () => <div>Created On</div>,
    cell: ({ row }) => {
      return (
        <div className="text-(--an-table-row-text-color) text-sm font-normal">
          {row.getValue("created_on")}
        </div>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      const rowValue = String(row.getValue(columnId));
      const filterText = String(filterValue);
      return rowValue.includes(filterText);
    },
    meta: {
      filterVariant: "date",
      dateFormat: "DD-MM-YYYY",
    }
  },
  {
    id: "actions",
    header: () => <div>Actions</div>,
    cell: () => (
      <div className="flex gap-3 items-center">
        <Eye className="w-4 h-4" />
        <EllipsisVertical className="w-4 h-4" />
      </div>
    ),
  },
];

export function Table() {
  const paginationDetails = {
    page: 1,
    limit: 25,
    total_pages: Math.ceil(data.length / 25),
    total: data.length,
  };
  return (
  <>
    <DataTable 
      data={data} 
      columns={columns} 
      paginationDetails={ paginationDetails }
      removeSortingForColumnIds={["select", "serial","actions"]}
      height="37.5rem"
      />
  </>
  )
}
