import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical, Eye, Trash2 } from "lucide-react";
import { DataTable } from "../Card/DoctorTable";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import data from './dummy_doctor_data.json';
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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
    accessorFn: (row: any) => row.serial,
    id: "serial",
    header: () => <div>S No</div>,
    cell: ({ row, table }) => {
      const sortedRows = table.getSortedRowModel().rows;
      const globalIndex = sortedRows.findIndex((r: any) => r.id === row.id);
      const serialNumber = globalIndex + 1;
      return (
        <span className="text-sm font-normal text-(--an-table-row-text-color)">
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
      <div className="text-(--an-table-body-title-text-color) font-normal">
        {row.getValue("title")}
      </div>
    ),
  },
  {
    accessorKey: "arabic_title",
    header: () => <div className="w-full text-right">Arabic Title</div>,
    cell: ({ row }) => {
      return (
        <div className="text-(--an-table-row-text-color) text-right font-normal">
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
        <div className="text-(--an-table-row-text-color) font-normal">
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
          <div className="text-(--an-table-row-text-color) font-normal">
            {row.getValue("img_title")}
          </div>
        </div>
      );
    },
    enableColumnFilter: false,
  },
  {
    accessorKey: "status",
    header: () => <div>Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("status") as boolean;  
      return (
        <Button
          className={`rounded-xl font-normal p-2 h-5 bg-white text-xs
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
    id: "actions",
    header: () => <div>Actions</div>,
    cell: () => (
      <div className="flex gap-3 items-center">
        <Tooltip>
          <TooltipTrigger asChild>
          <Eye className="w-4 h-3" />
          </TooltipTrigger>
          <TooltipContent side="top" align="center">
            <div className=" text-white">view</div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
          <Trash2 className="w-4 h-3" />
          </TooltipTrigger>
          <TooltipContent side="top" align="center">
            <div className=" text-white">delete</div>
          </TooltipContent>
        </Tooltip>
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
