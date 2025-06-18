import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical, Eye, Trash2 } from "lucide-react";
import { DataTable } from "../Card/DoctorTable";
import { Button } from "../ui/button";
import data from './dummy_doctor_data.json';
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ViewIcon } from "../icons/Actions/view";
import { DeleteIcon } from "../icons/Actions/delete";

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
    header: () => <div className="pl-2">S No</div>,
    cell: ({ row, table }) => {
      const sortedRows = table.getSortedRowModel().rows;
      const globalIndex = sortedRows.findIndex((r: any) => r.id === row.id);
      const serialNumber = globalIndex + 1;
      return (
        <span className="text-xs font-normal text-(--an-table-row-text-color) pl-2">
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
      <div className="text-(--an-table-body-title-text-color) font-normal w-80">
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
    header: () => <div className="pl-3">Code</div>,
    cell: ({ row }) => {
      return (
        <div className="text-(--an-table-row-text-color) font-normal pl-3">
          {row.getValue("code")}
        </div>
      );
    },
     filterFn: (row, columnId, filterValue) => {
      const rowValue = String(row.getValue(columnId));
      const filterText = String(filterValue);
      return rowValue.startsWith(filterText);
    },
  },
  {
    accessorKey: "img_title",
    header: () => <div>Image</div>,
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center w-25">
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
        <div className="flex">
        <Button
          className={`rounded-xl font-normal p-2 h-4 bg-white text-xs
            ${status === true ? "bg-(--an-table-active-background) text-(--an-table-active-text-color) hover:bg-(--an-table-active-background)" : "bg-(--an-table-inactive-background) text-(--an-table-inactive-text-color) hover:bg-(--an-table-inactive-background)"}`}
        >
          {status === true ? 'Active' : (status === false ? 'Inactive' : '')}
        </Button>
        </div>
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
    },
  },
  {
    id: "actions",
    header: () => <div>Actions</div>,
    cell: () => (
      <div className="flex gap-3 items-center">
        <Tooltip>
          <TooltipTrigger asChild>
          <ViewIcon className="w-3.5 h-3.5 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent side="top" align="center">
            <div className=" text-white">View</div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
          <DeleteIcon className="w-4.5 h-4.5 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent side="top" align="center">
            <div className=" text-white">Delete</div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
          <EllipsisVertical className="w-4 h-4 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent side="top" align="center">
            <div className=" text-white">More Options</div>
          </TooltipContent>
        </Tooltip>
      </div>
    ),
  },
];

export function Table() {
  return (
  <>
    <DataTable 
      data={data} 
      columns={columns} 
      removeSortingForColumnIds={["select", "serial","actions"]}
      height="calc(100vh - 135px)"
      />
  </>
  )
}
