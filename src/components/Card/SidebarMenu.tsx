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
import { Header } from "./Header";
import { LocationName } from "./LocationName";
import { Link, useLocation } from "@tanstack/react-router";
import { AppointmentScreen } from "./AppointmentScreen";
import { PersonalDetails } from "./Doctors/PersonalDetails";
import { Specialities } from "./Doctors/Specialities";
import { DoctorsCards } from "./Doctors/DoctorsCards";
import { NoLocation } from "../NoCards/NoLocation";
import { NoAppointment } from "../NoCards/NoAppointment";
import { NoDoctor } from "../NoCards/NoDoctor";
import { NoSpecialization } from "../NoCards/NoSpecialization";
import { Table } from "../testing/Table";

type headings = {
  id: number;
  title: string;
  icon: any;
  url: string;
};

const gallery = [
  { img: "/src/components/icons/LoctaionName/img1.jpg" },
  { img: "/src/components/icons/LoctaionName/img2.jpg" },
  { img: "/src/components/icons/LoctaionName/img3.jpg" },
  { img: "/src/components/icons/LoctaionName/img4.jpg" },
  { img: "/src/components/icons/LoctaionName/img5.jpg" },
  { img: "/src/components/icons/LoctaionName/img6.jpg" },
  { img: "/src/components/icons/LoctaionName/img7.jpg" },
  { img: "/src/components/icons/LoctaionName/img8.jpg" },
  { img: "/src/components/icons/LoctaionName/img9.jpg" },
];

const speciality = [
  { name: "General Practitioner" },
  { name: "ENT" },
  { name: "Gastroenterology" },
  { name: "Diabetology" },
  { name: "Psychiatry" },
  { name: "Neurology" },
];

const doctors = [
  { name: "Fatima SI Jaber" },
  { name: "Asmaa Mohamed" },
  { name: "Sheikha AI kaabi" },
  { name: "Maryam AI Tunaiji" },
  { name: "Fatima Mohamed" },
  { name: "Fatima Mohamed" },
];

const data = {
  status : true,
  created_on: "26-05-2025",
  email: "info.almanahospital.com.sa",
  phone: "+917013170520",
  address: "23-05-2025"
}

export function SidebarMenu({ items }: { items: headings[] }) {
  const location = useLocation();
  const [activeId, setActiveId] = useState<number>(() => {
    const currentItem = items.find((item) => location.pathname.startsWith(item.url));
    return currentItem ? currentItem.id : 1;
  });

  return (
    <SidebarProvider
      className="bg-[#EFF4EF]"
      style={{ "--sidebar-width": "10.5rem", } as React.CSSProperties}
    >
      <Sidebar className="flex flex-col h-screen w-[155px] p-1 itmes-start rounded-md bg-(--an-menu-background) mt-1.5 ml-1.5 border-none">
        <SidebarHeader className="bg-white">
          <AlmanaIcon className={"w-20 h-10"} />
        </SidebarHeader>
        <SidebarContent className="bg-white">
          <SidebarGroup className="gap-1 p-0 mt-6">
              {items &&
                items.length > 0 &&
                items.map((item) => (
                  <SidebarMenuItem key={item.id} className="list-none">
                    <SidebarMenuButton
                      asChild
                      className={`p-2 rounded-lg h-8 cursor-pointer ${activeId === item.id ? "bg-(--an-sidebar-active-background) hover:bg-(--an-sidebar-active-background) border-1 border-(--an-sidebar-active-text-color) text-(--an-sidebar-active-text-color) hover:text-(--an-sidebar-active-text-color)" : ""}`}
                      onClick={() => setActiveId(item.id)}
                    >
                      <Link
                      to={item.url}
                      className="flex justify-start items-center"
                    >
                      <item.icon className="!w-3 !h-3" />
                      <p className="text-xs font-(family-name:--an-menu-font-family) font-normal">
                        {item.title}
                      </p>
                    </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
          </SidebarGroup>
          <div className="absolute bottom-1 -left-8 !w-48 !h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-tr from-(--an-sidebar-footer-bg) to-(--an-sidebar-footer-bg) blur-xl rotate-[38.723deg] overflow-hidden rounded-4xl"></div>
        </SidebarContent>
      </Sidebar>
      <div className="flex flex-col w-full max-w-full overflow-hidden mr-2">
        <Header name="John Doe" role="Frondend Developer" />
        {/* <div className="flex items-center justify-center h-full w-full">
        <NoSpecialization />
        <NoLocation />
        <NoAppointment />
        <NoDoctor />
        </div> */}
        {/* <DoctorsCards /> */}
        <div className="flex flex-col items-center justify-center h-full w-full">
          <Table />
          </div>
      </div>
    </SidebarProvider>
  );
}
