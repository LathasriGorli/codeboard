import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import {
  fuzzyArrayFilter,
  fuzzySort,
  fuzzyStringFilter,
} from "~/http/services/utils";
import { cn } from "~/lib/utils";
import { DataTable } from "../Card/DoctorTable";
import { ViewIcon } from "../icons/Actions/view";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import data from "./location.json";

export interface Person {
  titleIcon: string;
  titleName: string;
  arabicTitle: string;
  specialities: string[];
  status: boolean;
  createdOn: string;
}

export interface LocationsProps {
  paginationDetails?: {
    page: number;
    limit: number;
    total_pages: number;
    total: number;
  };
}

const defaultData: Person[] = data.map((item) => ({
  titleIcon:
    "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
  titleName: item.location.location_en_name,
  arabicTitle: item.location.location_ar_name,
  specialities: item.specializations.map(
    (specialization) => specialization.specialization_en_name
  ),
  status: item.location.is_active,
  createdOn: item.location.created_on,
}));

export const columns: ColumnDef<Person>[] = [
  {
    id: "serial",
    header: () => <div className="text-start pl-2">S No</div>,
    cell: ({ row, table }) => {
      const sortedRows = table.getSortedRowModel().rows;
      const globalIndex = sortedRows.findIndex((r: any) => r.id === row.id);
      const serialNumber = globalIndex + 1;
      return (
        <span className="text-xs text-left font-normal text-(--an-table-row-text-color) pl-2">
          {serialNumber.toString().padStart(2, "0")}
        </span>
      );
    },
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    accessorKey: "titleName",
    header: () => <div>Title</div>,
    enableColumnFilter: true,
    cell: ({ row }) => (
      <div className="flex gap-2">
        <span className="h-5 w-5 border border-slate-400 flex items-center justify-center rounded-xs overflow-hidden">
          <img
            src={row.original.titleIcon}
            className="h-full w-full object-cover"
            alt="icon"
          />
        </span>
        <span>{row.getValue("titleName")}</span>
      </div>
    ),
    filterFn: fuzzyStringFilter,
  },
  {
    accessorKey: "arabicTitle",
    cell: ({ row }) => {
      return (
        <div className="text-(--an-table-row-text-color) text-right font-normal">
          {row.getValue("arabicTitle")}
        </div>
      );
    },
    header: () => <div className="w-full text-right">Arabic Title</div>,
    enableColumnFilter: false,
  },
  {
    accessorKey: "specialities",
    header: () => <div>Specialities</div>,
    filterFn: fuzzyArrayFilter,
    enableColumnFilter: true,
    cell: ({ row }) => {
      const allSpecialities = row.original.specialities;
      const displayed = allSpecialities.slice(0, 3);
      const remainingCount = allSpecialities.length - displayed.length;
      
      const colors = [
        'bg-[rgba(255,114,94,0.20)] text-[#FF725E]',
        'bg-[rgba(162,87,249,0.20)] text-[#A257F9]',
        'bg-[rgba(79,129,189,0.20)] text-[#4F81BD]',
        'bg-[rgba(165,36,61,0.20)] text-[#A5243D]',
        'bg-[rgba(81,175,51,0.20)] text-[#51AF33]',
      ];
      
      const getRandomColor = (specialty: string, index: number) => {
        if (!specialty || typeof specialty !== 'string') {
          return colors[index % colors.length];
        }
        const hash = specialty.split('').reduce((acc, char) => {
          return char.charCodeAt(0) + ((acc << 5) - acc);
        }, index);
        return colors[Math.abs(hash) % colors.length];
      };
   
      return (
        <div className="flex flex-wrap gap-1">
          {displayed.map((s, i) => {
            return (
              <span
                key={i}
                className={`inline-flex items-center px-2 py-1 rounded-full text-[11px] font-medium ${getRandomColor(s, i)}`}
              >
                {s}
              </span>
            );
          })}
          
          {remainingCount > 0 && (
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="bg-gray-400 text-[#494343] px-2 py-1 rounded-full border border-[#E3E3E3] cursor-pointer">
                  +{remainingCount}
                </span>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                align="center"
                className={`px-1 py-1 text-[11px] leading-relaxed bg-white overflow-y-auto
        ${
          allSpecialities.slice(3).length <= 3
            ? "w-48 max-h-24"
            : allSpecialities.slice(3).length <= 6
              ? "w-64 max-h-32"
              : "w-80 max-h-48"
        }`}
              >
                <div className="flex flex-wrap gap-1">
        {allSpecialities.slice(3).map((s, idx) => (
          <span
            key={idx}
            className={`inline-flex items-center px-2 py-1 rounded-full text-[11px] font-medium ${getRandomColor(s, idx + 3)}`}
          >
            {s}
          </span>
        ))}
      </div>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      );
    },
    sortingFn: fuzzySort,
    sortUndefined: "last",
    sortDescFirst: false,
  },
  {
    accessorKey: "status",
    header: () => <div>Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("status") as boolean;
      return (
        <div
          className={cn(
            "rounded-xl font-normal w-fit px-2 h-5 flex items-center justify-center text-xs",
            status === true
              ? "bg-(--an-table-active-background) text-(--an-table-active-text-color) hover:bg-(--an-table-active-background)"
              : "bg-(--an-table-inactive-background) text-(--an-table-inactive-text-color) hover:bg-(--an-table-inactive-background)"
          )}
        >
          {status === true ? "Active" : status === false ? "Inactive" : ""}
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
      ],
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
            <EllipsisVertical className="w-4 h-4 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent side="top" align="center">
            <div className=" text-white">More Options</div>
          </TooltipContent>
        </Tooltip>
      </div>
    ),
  },
] as ColumnDef<Person>[];

export function Locations() {
  return (
    <>
      <DataTable
        data={defaultData}
        columns={columns}
        removeSortingForColumnIds={["select", "serial", "actions"]}
        height="calc(100vh-135px)"
      />
    </>
  );
}
