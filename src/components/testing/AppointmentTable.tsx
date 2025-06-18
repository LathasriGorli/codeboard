import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical, Eye } from "lucide-react";
import { fuzzyArrayFilter, fuzzyStringFilter } from "~/http/services/utils";
import { DataTable } from "../Card/DoctorTable";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import data from "./appointments_dummy_data.json";
import { ViewIcon } from "../icons/Actions/view";

export type AppointmentTable = {
  date: string;
  slot: string;   
  type_of_visit: string;
  appointment_for: string;
  doctor_name: string;
  speciality: string;
  status: string;
  symptoms: string[];
  imgUrl1: string;
  imgUrl2: string;
};

const AppointData: AppointmentTable[] = data.map((item) => ({
  date: item.date,
  slot: item.slot,
  type_of_visit: item.type_of_visit,
  appointment_for: item.appointment_for,
  doctor_name: item.doctor_name,
  speciality: item.speciality,
  status: item.status,
  symptoms: item.symptoms,
  imgUrl1: item.imgUrl1,
  imgUrl2: item.imgUrl2,
}));

export const columns: ColumnDef<AppointmentTable>[] = [
  {
    accessorKey: "appointment_for",
    header: () => <div className="pl-2">Appointment For</div>,
    cell: ({ row }) => ( 
      <div className="flex gap-2 items-center w-40 pl-2">
        <img
          src={row.original.imgUrl1}
          className="w-6 h-6 object-cover border"
        />
        <div className="text-(--an-table-row-text-color) font-normal">
          {row.getValue("appointment_for")}
        </div>
      </div>
    ),
    filterFn: fuzzyStringFilter,
  },
  {
    accessorKey: "doctor_name",
    header: () => <div>Doctor</div>,
    cell: ({ row }) => (
      <div className="flex gap-2 items-center w-40">
        <img
          src={row.original.imgUrl2}
          className="w-6 h-6 object-cover border"
        />
        <div className="text-(--an-table-row-text-color) font-normal">
          {row.getValue("doctor_name")}
        </div>
      </div>
    ),
    filterFn: fuzzyStringFilter,
  },
  {
    accessorKey: "type_of_visit",
    header: () => <div>Type Of Visit</div>,
    cell: ({ row }) => {
      const type = row.getValue("type_of_visit") as string;
      const borderColor =
        type === "Teleconsultation"
          ? "#F2994A"
          : type === "Home visit"
            ? "#9B51E0"
            : "#2D9CDB";
      const textColor =
        type === "Teleconsultation"
          ? "#F2994A"
          : type === "Home visit"
            ? "#9B51E0"
            : "#2D9CDB";
      return (
        <div
          className="h-6 rounded-sm border-1 p-1 font-normal w-fit"
          style={{
            color: textColor,
            borderColor: borderColor,
          }}
        >
          {row.getValue("type_of_visit")}
        </div>
      );
    },
    meta: {
      filterVariant: "select",
      options: [
        { value: "Teleconsultation", label: "Teleconsultation" },
        { value: "Hospital visit", label: "Hospital visit" },
        { value: "Home visit", label: "Home visit" },
      ],
    },
  },
  {
    accessorKey: "date",
    header: () => <div>Date</div>,
    cell: ({ row }) => (
      <div className="text-(--an-table-row-text-color) font-normal">
        {row.getValue("date")}
      </div>
    ),
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
    accessorKey: "slot",
    header: () => <div>Slot</div>,
    cell: ({ row }) => {
      return (
        <div className="text-(--an-table-body-title-text-color) font-normal">
          {row.getValue("slot")}
        </div>
      );
    },
    enableColumnFilter: false,
  },
  {
    accessorKey: "speciality",
    header: () => <div>Speciality</div>,
    cell: ({ row }) => {
      const type = row.getValue("speciality") as string;
      return (
        <div
          className="rounded-full border-1 px-2 font-normal text-[#4F81BD] bg-(--an-appoint-table-row-specality-bg) border-(--an-appoint-table-row-specality-border) w-fit"
        >
          {row.getValue("speciality")}
        </div>
      );
    },
    enableColumnFilter: false,
  },
  {
    accessorKey: "status",
    header: () => <div>Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("status");
      let icon = null;

      if (status === "Cancelled") {
        icon = <img src="/src/components/icons/AppointmentTable/cancelDot.svg" />;
      } else if (status === "Upcoming") {
        icon = <img src="/src/components/icons/AppointmentTable/upcomingDot.svg"/>;
      } else if (status === "Completed") {
        icon = <img src="/src/components/icons/AppointmentTable/completeDot.svg"/>;
      }

      return (
        <div className="flex gap-2 items-center text-(--an-table-row-text-color) font-normal">
          {icon}
          {row.getValue("status")}
        </div>
      );
    },
    meta: {
      filterVariant: "select",
      options: [
        { value: "Cancelled", label: "Cancelled" },
        { value: "Upcoming", label: "Upcoming" },
        { value: "Completed", label: "Completed" },
      ],
    },
  },
  {
    accessorKey: "symptoms",
    header: () => <div>Symptoms</div>,
    enableColumnFilter: false,
    cell: ({ row }) => {
      const allSymptoms = row.original.symptoms;
      const displayed = allSymptoms.slice(0, 2);
      const remainingCount = allSymptoms.length - displayed.length;

      return (
        <div className="flex flex-wrap gap-1">
          {displayed.map((item,index) => {
            return (
              <div key={index} className="text-[#494343] px-2 py-1 font-normal bg-[#E4E4E4] rounded-sm overflow-ellipsis overflow-hidden">
                {item}
              </div>
            );
          })}
          {remainingCount > 0 && (
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="bg-[#E4E4E4] text-[#494343] p-1 border-1 border-[#E3E3E3] cursor-pointer">
                  +{remainingCount}
                </span>
              </TooltipTrigger>
              <TooltipContent side="top" align="center">
                <div className=" text-white">
                  {allSymptoms.slice(2).join(", ")}
                </div>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      );
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
];

export function appointmentTable() {
  const paginationDetails = {
    page: 1,
    limit: 25,
    total_pages: Math.ceil(AppointData.length / 25),
    total: AppointData.length,
  };
  return (
    <>
      <DataTable
        data={AppointData}
        columns={columns}
        paginationDetails={paginationDetails}
        removeSortingForColumnIds={["actions"]}
        height="36rem"
      />
    </>
  );
}
