import { AlmanaIcon } from "../icons/AlmanaIcon";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "../ui/sidebar";
import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Header } from "./Header";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { EllipsisVertical, Eye } from "lucide-react";
import { Checkbox } from "~/components/ui/checkbox";
import { fuzzyArrayFilter, fuzzySort, fuzzyStringFilter } from "~/http/services/utils";
import { cn } from "~/lib/utils";
import { DataTable } from "../Card/DoctorTable";
import data from '~/components/testing/location.json';
import { LocationsProps } from "../testing/Locations";


type headings = {
  id: number;
  title: string;
  icon: any;
};

// const data = [
//   {
//     id: 1,
//     title: "General Practitioner",
//     arabic_title: "عُنْوان",
//     code: 4243,
//     imgUrl:
//       "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
//     img_title: "image.png",
//     status: 1,
//     created_on: "15-06-2024",
//   },
//   {
//     id: 2,
//     title: "OB/GYN",
//     arabic_title: "عُنْوان عُنْوان",
//     code: 91102,
//     imgUrl:
//       "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
//     img_title: "home.png",
//     status: 0,
//     created_on: "16-06-2024",
//   },
//   {
//     id: 3,
//     title: "Dermatology",
//     arabic_title: "عُنْوان",
//     code: 7082,
//     imgUrl:
//       "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
//     img_title: "tablet.png",
//     status: 1,
//     created_on: "11-06-2024",
//   },
//   {
//     id: 4,
//     title: "Psychiatry",
//     arabic_title: "عُنْوان",
//     code: 400,
//     imgUrl:
//       "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
//     img_title: "syrup.png",
//     status: 0,
//     created_on: "15-06-2024",
//   },
//   {
//     id: 5,
//     title: "ENT",
//     arabic_title: "عُنْوان عُنْوان عُنْوان",
//     code: 3743,
//     imgUrl:
//       "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
//     img_title: "tablet.png",
//     status: 1,
//     created_on: "08-06-2024",
//   },
//   {
//     id: 6,
//     title: "Neurology",
//     arabic_title: "عُنْوان",
//     code: 111,
//     imgUrl:
//       "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
//     img_title: "image.png",
//     status: 1,
//     created_on: "07-06-2024",
//   },
//   {
//     id: 7,
//     title: "Dermatology",
//     arabic_title: "عُنْوان عُنْوان",
//     code: 1020,
//     imgUrl:
//       "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
//     img_title: "image.png",
//     status: 0,
//     created_on: "18-06-2024",
//   },
//   {
//     id: 8,
//     title: "Dermatology",
//     arabic_title: "عُنْوان",
//     code: 1020,
//     imgUrl:
//       "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
//     img_title: "image.png",
//     status: 1,
//     created_on: "26-06-2024",
//   },
//   {
//     id: 9,
//     title: "Gastroenterology",
//     arabic_title: "عُنْوان",
//     code: 100,
//     imgUrl:
//       "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
//     img_title: "image.png",
//     status: 1,
//     created_on: "21-06-2024",
//   },
//   {
//     id: 10,
//     title: "Neurology",
//     arabic_title: "عُنْوان",
//     code: 10,
//     imgUrl:
//       "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
//     img_title: "image.png",
//     status: 0,
//     created_on: "11-06-2024",
//   },
// ];

// export type Project = (typeof data)[number];

// const paginationDetails = {
//   page: 1,
//   limit: 10,
//   total_pages: Math.ceil(data.length / 10),
//   total: data.length,
// };

// export const columns: ColumnDef<Project>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <div className="flex items-center justify-start">
//         {table.getIsSomePageRowsSelected() &&
//         !table.getIsAllPageRowsSelected() ? (
//           <button
//             onClick={() => table.toggleAllPageRowsSelected(false)}
//             aria-label="Deselect all"
//             className="h-4 w-4 flex items-center justify-center text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600"
//           >
//             <span className="text-lg font-bold">-</span>
//           </button>
//         ) : (
//           <Checkbox
//             checked={table.getIsAllPageRowsSelected()}
//             onCheckedChange={(value) =>
//               table.toggleAllPageRowsSelected(!!value)
//             }
//             aria-label="Select all"
//             className="text-left border-1 border-solid border-(--an-tabel-checkbox-border-color) shadow-none"
//           />
//         )}
//       </div>
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//         className="text-left border-1 border-solid border-(--an-tabel-checkbox-border-color) shadow-none"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorFn: (row: any) => row.serial,
//     id: "serial",
//     header: () => <span className="text-left">S No</span>,
//     cell: ({ table, row }) => {
//       const sortedRows = table.getSortedRowModel().rows;
//       const sortedIndex = sortedRows.findIndex((r) => r.id === row.id);
//       const serialNumber = sortedIndex + 1;
//       return (
//         <span className="text-base text-left font-normal text-(--an-table-row-text-color)">
//           {serialNumber.toString().padStart(2, "0")}
//         </span>
//       );
//     },
//     enableColumnFilter: false,
//     enableSorting: false,
//   },
//   {
//     accessorKey: "title",
//     header: () => <div>Title</div>,
//     cell: ({ row }) => (
//       <div className="text-(--an-table-body-title-text-color) font-(family-name:--an-table-font-body-family)">
//         {row.getValue("title")}
//       </div>
//     ),
//     filterFn: fuzzyStringFilter,
//   },
//   {
//     accessorKey: "arabic_title",
//     header: () => <div className="text-right">Arabic Title</div>,
//     cell: ({ row }) => {
//       return (
//         <div className="text-(--an-table-row-text-color) text-right font-(family-name:--an-table-font-body-family)">
//           {row.getValue("arabic_title")}
//         </div>
//       );
//     },
//     enableColumnFilter: false,
//   },
//   {
//     accessorKey: "code",
//     header: () => <div>Code</div>,
//     cell: ({ row }) => {
//       return (
//         <div className="text-(--an-table-row-text-color) font-(family-name:--an-table-font-header-family)">
//           {row.getValue("code")}
//         </div>
//       );
//     },
//     filterFn: (row, columnId, filterValue) => {
//       const rowValue = String(row.getValue(columnId));
//       const filterText = String(filterValue);
//       return rowValue.startsWith(filterText);
//     },
//   },
//   {
//     accessorKey: "img_title",
//     header: () => <div>Image</div>,
//     cell: ({ row }) => {
//       return (
//         <div className="flex gap-2 items-center w-40">
//           <img
//             src={row.original.imgUrl}
//             className="w-6 h-6 object-cover border"
//           />
//           <div className="text-(--an-table-row-text-color) font-(family-name:--an-table-font-header-family)">
//             {row.getValue("img_title")}
//           </div>
//         </div>
//       );
//     },
//   },
//   {
//     accessorKey: "status",
//     header: () => <div>Status</div>,
//     cell: ({ row }) => {
//       const status = row.getValue("status") as number;
//       return (
//         <Button
//           className={`rounded-xl font-normal p-3 h-5 bg-white font-(family-name:--an-table-font-header-family)
//               ${status === 1 ? "bg-(--an-table-active-background) text-(--an-table-active-text-color) hover:bg-(--an-table-active-background)" : "bg-(--an-table-inactive-background) text-(--an-table-inactive-text-color) hover:bg-(--an-table-inactive-background)"}`}
//         >
//           {status === 1 ? "Active" : status === 0 ? "Inactive" : ""}
//         </Button>
//       );
//     },
//     filterFn: (row, columnId, filterValue) => {
//       const status = row.getValue(columnId);
//       const label = status === 1 ? "active" : status === 0 ? "inactive" : "";
//       return label.startsWith(filterValue.toLowerCase());
//     },
//   },
//   {
//     accessorKey: "created_on",
//     header: () => <div>Created On</div>,
//     cell: ({ row }) => {
//       return (
//         <div className="text-(--an-table-row-text-color) font-(family-name:--an-table-font-header-family)">
//           {row.getValue("created_on")}
//         </div>
//       );
//     },
//   },
//   {
//     id: "actions",
//     header: () => <div>Actions</div>,
//     cell: () => (
//       <div className="flex gap-3 items-center">
//         <Eye className="w-4 h-4" />
//         <EllipsisVertical className="w-4 h-4" />
//       </div>
//     ),
//   },
// ];

export interface Person {
  titleIcon: string;
  titleName: string;
  arabicTitle: string;
  specialities: string[];
  status: boolean;
  createdOn: string;
}

const defaultData: Person[] = data.map((item) => ({
  titleIcon: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80',
  titleName: item.location.location_en_name,
  arabicTitle: item.location.location_ar_name,
  specialities: item.specializations.map((specialization) => specialization.specialization_en_name),
  status: item.location.is_active,
  createdOn: item.location.created_on,
}));

const columnHelper = createColumnHelper<Person>();

const columns: ColumnDef<Person>[] = [
columnHelper.display({
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
          className="text-left border-1 border-solid border-(--an-tabel-checkbox-border-color) shadow-none"
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      )}
    </div>
  ),
  cell: ({ row }) => (
    <Checkbox
      className="text-left border-1 border-solid border-(--an-tabel-checkbox-border-color) shadow-none"
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
    />
  ),
  enableSorting: false,
  enableHiding: false,
}),

columnHelper.display({
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
}),

columnHelper.accessor("titleName", {
  enableColumnFilter: true,
  cell: (info) => (
    <div className="space-x-2 flex ">
      <span className="h-5 w-5 border border-slate-400 flex items-center justify-center rounded-xs overflow-hidden">
        <img
          src={info.row.original.titleIcon}
          className="h-full w-full object-cover"
          alt="icon"
        />
      </span>
      <span className="font-(family-name:--an-table-font-body-family)">{info.getValue()}</span>
    </div>
  ),
  filterFn: fuzzyStringFilter,
  header: () => "Title",
}),

columnHelper.accessor("arabicTitle", {
  cell: (info) => {
    return (
      <div className="text-(--an-table-row-text-color) text-right font-(family-name:--an-table-font-body-family) text-sm font-normal">
        {info.getValue()}
      </div>
    );
  },
  header: () => <div className="text-right">Arabic Title</div>,
  enableColumnFilter: false,
}),

columnHelper.accessor("specialities", {
  header: () => (
    <span className="font-(family-name:--an-table-font-body-family) text-(--an-text-header-D-color) text-(length:--an-text-header-D-font) font-(--an-text-header-D-weight) leading-(--an-text-header-D-height)">
      Speciality
    </span>
  ),
  filterFn: fuzzyArrayFilter,
  enableColumnFilter: true,
  cell: ({ row }) => (
    <div className="flex flex-wrap gap-1">
      {row.original.specialities.map((s, i) => {
        let colorClass = "";
        switch (s) {
          case "OB/GYN":
            colorClass = "bg-blue-200 text-blue-800";
            break;
          case "Dermatology":
            colorClass = "bg-purple-200 text-purple-800";
            break;
          case "Psychiatry":
            colorClass = "bg-red-200 text-red-800";
            break;
          case "ENT":
            colorClass = "bg-green-200 text-green-800";
            break;
          default:
            colorClass = "bg-gray-200 text-gray-800";
        }
        return (
          <span
            key={i}
            className={`text-xs px-2 py-1 rounded-full ${colorClass}
        font-(family-name:--an-table-font-body-family) text-(--an-text-S-D-color) text-(length:--an-text-Status-D-font) font-(--an-text-header-D-weight) leading-(--an-text-Status-D-height)`}
          >
            {s}
          </span>
        );
      })}
    </div>
  ),
  sortingFn: fuzzySort,
  sortUndefined: 'last',
  sortDescFirst: false,
}),
{
  accessorKey: "status",
  header: () => <div>Status</div>,
  cell: ({ row }) => {
    const status = row.getValue("status") as boolean;
    return (
      <div>
        <div
          className={cn(
            "rounded-xl font-normal text-sm w-fit px-2 flex items-center justify-center font-(family-name:--an-table-font-body-family)",
            status === true
              ? "bg-(--an-table-active-background) text-(--an-table-active-text-color) hover:bg-(--an-table-active-background)" : "bg-(--an-table-inactive-background) text-(--an-table-inactive-text-color) hover:bg-(--an-table-inactive-background)"
          )}
        >
          {status === true ? "Active" : status === false ? "Inactive" : ""}
        </div>
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

columnHelper.accessor("createdOn", {
  cell: (info) => (
    <span className="--an-table-font-body-family">{info.getValue()}</span>
  ),
  header: () => "Created On",
  sortUndefined: 'last',
  sortDescFirst: false,
  filterFn: (row, columnId, filterValue) => {
    const rowValue = String(row.getValue(columnId));
    const filterText = String(filterValue);
    return rowValue.startsWith(filterText);
  },
  meta:{
    filterVariant: "date",
  }
}),

columnHelper.display({
  id: "actions",
  header: () => <div className="text-center">Actions</div>,
  cell: () => (
    <div className="flex items-center justify-center gap-2">
        <Eye className="w-4 h-4"/>
        <EllipsisVertical  className="w-5 h-5"/>
    </div>
  ),
}),
] as ColumnDef<Person>[];


export function SidebarMenu({ items }: { items: headings[] }) {
  const [activeId, setActiveId] = useState(1);
  const paginationDetails = {
    page: 1,
    limit: 25,
    total_pages: Math.ceil(defaultData.length / 25),
    total: defaultData.length,
  }
  return (
    <SidebarProvider
      className="bg-[#EFF4EF]"
      style={{ "--sidebar-width": "13rem" } as React.CSSProperties}
    >
      <Sidebar className="flex flex-col h-screen w-[199px] p-1 itmes-start gap-10 rounded-md bg-(--an-menu-background) mt-1 border-none">
        <SidebarHeader>
          <AlmanaIcon className={"w-25 h-12"} />
        </SidebarHeader>
        <SidebarContent>
          <ScrollArea className="max-h-[70vh]">
            <SidebarGroup className="gap-2">
              <SidebarGroupLabel className="text-(--an-menu-text-color) font-(family-name:--an-menu-font-family) text-xs font-normal p-0">
                MAIN MENU
              </SidebarGroupLabel>
              {items &&
                items.length > 0 &&
                items.map((item) => (
                  <SidebarMenuItem key={item.id} className="list-none">
                    <SidebarMenuButton
                      asChild
                      className={`p-2 rounded-lg h-8 cursor-pointer ${activeId === item.id ? "bg-(--an-sidebar-active-background) hover:bg-(--an-sidebar-active-background) border-1 border-(--an-sidebar-active-text-color) text-(--an-sidebar-active-text-color) hover:text-(--an-sidebar-active-text-color)" : ""}`}
                      onClick={() => setActiveId(item.id)}
                    >
                      <div className="flex justify-start items-center">
                        {<item.icon className="w-6 h-6" />}
                        <p className="text-sm font-(family-name:--an-menu-font-family) font-normal">
                          {item.title}
                        </p>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarGroup>
          </ScrollArea>
        </SidebarContent>
        <SidebarFooter className="w-full h-32 bg-(--an-menu-footer-bg) blur-2xl rotate-38.723deg -left-15 -bottom-10 relative"></SidebarFooter>
      </Sidebar>
      <div className="flex flex-col w-full gap-4">
        <Header name="John Doe" role="Frondend Developer" />
        <p>Locations</p>
        <DataTable
        data={defaultData}
        columns={columns}
        paginationDetails={paginationDetails}
        height="34.5rem"
      />
      </div>
    </SidebarProvider>
  );
}
