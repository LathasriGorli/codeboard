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
    const currentItem = items.find((item) => item.url === location.pathname);
    return currentItem ? currentItem.id : 1;
  });

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
          <SidebarGroup className="gap-1">
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
                      <Link
                      to={item.url}
                      className="flex justify-start items-center"
                    >
                      <item.icon className="w-6 h-6" />
                      <p className="text-[13px] font-(family-name:--an-menu-font-family) font-normal">
                        {item.title}
                      </p>
                    </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="w-full h-24 bg-(--an-menu-footer-bg) blur-2xl rotate-38.723deg -left-15 -bottom-10 relative"></SidebarFooter>
      </Sidebar>
      <div className="flex flex-col gap-4 w-full max-w-full overflow-hidden">
        <Header name="John Doe" role="Frondend Developer" />
        <LocationName data={data} doctors={doctors} speciality={speciality} gallery={gallery}/>
        {/* <AppointmentScreen /> */}
      </div>
    </SidebarProvider>
  );
}
