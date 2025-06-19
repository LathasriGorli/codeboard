import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical, Eye } from "lucide-react";
import { fuzzyStringFilter } from "~/http/services/utils";
import { DataTable } from "../Card/DoctorTable";
import { AwaitingIcon } from "../icons/AwaitingIcon";
import { ConfirmIcon } from "../icons/ConfirmIcon";
import { DeniedIcon } from "../icons/DeniedIcon";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import data from './dummy_doctor_absence_data.json';
import { ViewIcon } from "../icons/Actions/view";
import { useEffect, useRef, useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";

export type DoctorLeave = {
  id: number;
  imgUrl: string;
  title: string;
  from_date: string;
  to_date: string;
  type: string;
  status: string;
  reason: string;
  affected_slots: number;
}

export const columns: ColumnDef<DoctorLeave>[] = [
    {
      accessorKey: "title",
      header: () => <div className="pl-2">Doctor Name</div>,
      cell: ({ row }) => (
        <div className="flex gap-2 items-center w-40 pl-2">
            <img
              src={row.original.imgUrl}
              className="w-6 h-6 object-cover border"
            />
            <div className="text-(--an-table-row-text-color) font-(family-name:--an-table-font-header-family) font-normal">
              {row.getValue("title")}
            </div>
          </div>
      ),
      filterFn: fuzzyStringFilter,
    },
    {
      accessorKey: "from_date",
      header: () => <div>From Date</div>,
      cell: ({ row }) => {
        return (
          <div className="text-(--an-table-body-title-text-color) font-(family-name:--an-table-font-body-family) font-normal">
            {row.getValue("from_date")}
          </div>
        );
      },
      filterFn: (row, columnId, filterValue) => {
        const rowValue = String(row.getValue(columnId)).toLowerCase();
        const filterText = String(filterValue).toLowerCase();
        return rowValue.includes(filterText);
      },
      meta: {
        filterVariant: "date",
        dateFormat: "MMM DD, YYYY",
      }
    },
    {
      accessorKey: "to_date",
      header: () => <div>To Date</div>,
      cell: ({ row }) => {
        return (
          <div className="text-(--an-table-row-text-color) font-(family-name:--an-table-font-header-family) font-normal">
            {row.getValue('to_date')}
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
        dateFormat: "MMM DD, YYYY",
      }
    },
    {
      accessorKey: "type",
      header: () => <div>Type</div>,
      cell: ({ row }) => {
        const type = row.getValue("type") as string;
        const borderColor = type === "Holiday" ? "#F2994A" : type === "Conference" ? "#9B51E0" : "#B90000";
        const textColor = type === "Holiday" ? "#F2994A" : type === "Conference" ? "#9B51E0" : "#B90000";
        return (
          <div className="h-6 rounded-sm border-1 p-1 font-(family-name:--an-table-font-family) font-normal w-fit" style={{ color: textColor, borderColor: borderColor }}>
            {row.getValue("type")}
          </div>
        );
      },
      meta: {
        filterVariant: "select",
        options: [
          { value: "Holiday", label: "Holiday" },
          { value: "Conference", label: "Conference" },
          { value: "Sick", label: "Sick" },
        ]
      }
    },
    {
      accessorKey: "status",
      header: () => <div>Status</div>,
      cell: ({ row }) => {
        const status = row.getValue("status");
        let icon = null;
    
        if (status === "Confirmed") {
          icon = <ConfirmIcon />;
        } else if (status === "Denied") {
          icon = <DeniedIcon />;
        } else if (status === "Awaiting approval") {
          icon = <AwaitingIcon />;
        }
    
        return (
          <div className="flex gap-2 items-center text-(--an-table-row-text-color) font-(family-name:--an-table-font-family) font-normal">
            {icon} 
            {row.getValue("status")}
          </div>
        );
      },
      meta: {
        filterVariant: "select",
        options: [
          { value: "Confirmed", label: "Confirmed" },
          { value: "Denied", label: "Denied" },
          { value: "Awaiting approval", label: "Awaiting approval" },
        ]
      }
    },
    {
      accessorKey: "reason",
      header: () => <div>Reason (hover to view)</div>,
      cell: ({ row }) => {
        const textRef = useRef<HTMLDivElement | null>(null);
        const [isOverflowed, setIsOverflowed] = useState(false);
        const reason = row.getValue("reason") as string;
    
        useEffect(() => {
          const el = textRef.current;
          if (el) {
            setIsOverflowed(el.scrollWidth > el.clientWidth);
          }
        }, [reason]);
    
        const content = (
          <div
            ref={textRef}
            className="text-(--an-table-row-text-color) font-(family-name:--an-table-font-header-family) overflow-hidden text-ellipsis whitespace-nowrap w-60 font-normal"
          >
            {reason}
          </div>
        );
    
        return isOverflowed ? (
          <HoverCard>
            <HoverCardTrigger asChild>
              {content}
            </HoverCardTrigger>
            <HoverCardContent className="max-w-xs text-[0.688rem] text-muted-foreground px-2 py-1">
              {reason}
            </HoverCardContent>
          </HoverCard>
        ) : (
          content
        );
      },
      enableColumnFilter: false,
    },
    {
      accessorKey: "affected_slots",
      header: () => <div>Affected Slots</div>,
      cell: ({ row }) => {
        return (
          <div className="flex flex-col justify-center items-center rounded-sm bg-[#5B5B5B] text-white font-(family-name:--an-table-font-header-family) w-5 h-5 font-normal">
            {row.getValue("affected_slots")}
          </div>
        );
      },
      enableColumnFilter: false,
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
];

export function DoctorLeaveTable() {
  const paginationDetails = {
    page: 1,
    limit: 25,
    total_pages: Math.ceil(data.length / 25),
    total: data.length,
  }
  return (
  <>
    <DataTable 
      data={data} 
      columns={columns} 
      paginationDetails={ paginationDetails }
      removeSortingForColumnIds={["actions"]}
      height="36rem"
    />
  </>
  )
}
