import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { EllipsisVertical, Eye } from "lucide-react";
import { Checkbox } from "~/components/ui/checkbox";
import { fuzzyArrayFilter, fuzzySort, fuzzyStringFilter } from "~/http/services/utils";
import { cn } from "~/lib/utils";
import { DataTable } from "../Card/DoctorTable";
import data from './location.json'
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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

const specialityColorMap: Record<string, string> = {
  "Cardiology": "bg-blue-200 text-blue-800",
  "Dermatology": "bg-purple-200 text-purple-800",
  "Psychiatry": "bg-red-200 text-red-800",
  "Neurology": "bg-green-200 text-green-800",
  "Pediatrics": "bg-orange-200 text-orange-800",
  "Oncology": "bg-sky-200 text-sky-800",
};

const defaultData: Person[] = data.map((item) => ({
    titleIcon: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80',
    titleName: item.location.location_en_name,
    arabicTitle: item.location.location_ar_name,
    specialities: item.specializations.map((specialization) => specialization.specialization_en_name),
    status: item.location.is_active,
    createdOn: item.location.created_on,
}));

export const columns: ColumnDef<Person>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex">
        {table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected() ? (
          <button
            className="w-4 h-4 flex items-center justify-center text-gray-600 bg-gray-200 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600"
            onClick={() => table.toggleAllPageRowsSelected(false)}
            aria-label="Deselect all"
          >
            <span className="text-lg">-</span>
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
        className="border-1 border-solid border-(--an-table-checkbox-border-color) shadow-none"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableHiding: false,
    enableSorting: false,
  },
  {
    id: "serial",
    header: () => <div className="text-start">S No</div>,
    cell: ({ row, table }) => {
      const sortedRows = table.getSortedRowModel().rows;
      const globalIndex = sortedRows.findIndex((r: any) => r.id === row.id);
      const serialNumber = globalIndex + 1;
      return (
        <span className="text-base text-left font-normal text-(--an-table-row-text-color)">
        {serialNumber.toString().padStart(2, "0")}
      </span>
      );
    },
    enableColumnFilter: false,
    enableSorting: false,
  },
  {
    accessorKey: "titleName",
    header: () => <div className="text-start">Title</div>,
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
        <span>{row.getValue('titleName')}</span>
      </div>
    ),
    filterFn: fuzzyStringFilter,
  },
  {
    accessorKey: "arabicTitle",
    cell: ({ row }) => {
      return (
        <div className="text-(--an-table-row-text-color) text-right text-sm font-normal">
          {row.getValue("arabicTitle")}
        </div>
      );
    },
    header: () => <div className="text-right">Arabic Title</div>,
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
  
      return (
        <div className="flex flex-wrap gap-1">
          {displayed.map((s, i) => {
            const colorClass = specialityColorMap[s] || "bg-gray-200 text-gray-800";
            return (
              <span
                key={i}
                className={cn(
                  `text-xs px-2 py-1 rounded-full ${colorClass}`,
                  "font-normal"
                )}
              >
                {s}
              </span>
            );
          })}
  
  {remainingCount > 0 && (
  <Tooltip>
    <TooltipTrigger asChild>
      <span
        className="bg-gray-400 text-[#494343] text-xs px-2 py-1 rounded-full border-1 border-[#E3E3E3] cursor-pointer"
      >
        +{remainingCount}
      </span>
    </TooltipTrigger>
    <TooltipContent side="top" align="center">
      <div className="text-xs text-white">
        {allSpecialities.slice(3).join(', ')}
      </div>
    </TooltipContent>
  </Tooltip>
)}
        </div>
      );
    },
    sortingFn: fuzzySort,
    sortUndefined: 'last',
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
              "rounded-xl font-normal text-sm w-fit px-2 flex items-center justify-center",
              status === true
                ? "bg-(--an-table-active-background) text-(--an-table-active-text-color) hover:bg-(--an-table-active-background)" : "bg-(--an-table-inactive-background) text-(--an-table-inactive-text-color) hover:bg-(--an-table-inactive-background)"
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
      ]
    }
  },
 {
    accessorKey: "createdOn",
    cell: ({row}) => (
      <span>{row.getValue('createdOn')}</span>
    ),
    header: () => "Created On",
    sortUndefined: 'last',
    sortDescFirst: false,
    filterFn: (row, columnId, filterValue) => {
      const rowValue = String(row.getValue(columnId));
      const filterText = String(filterValue);
      return rowValue.includes(filterText);
    },
    meta:{
      filterVariant: "date",
    }
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: () => (
      <div className="flex items-center justify-center gap-2">
          <Eye className="w-4 h-4"/>
          <EllipsisVertical  className="w-5 h-5"/>
      </div>
    ),
  },
] as ColumnDef<Person>[];


export function Locations() {
  
  const paginationDetails = {
    page: 1,
    limit: 25,
    total_pages: Math.ceil(defaultData.length / 25),
    total: defaultData.length,
  };
  return (
    <>
      <DataTable
        data={defaultData}
        columns={columns}
        paginationDetails={paginationDetails}
        removeSortingForColumnIds={["select", "serial","actions"]}
        height = "37.5rem"
      />
    </>
  );
}