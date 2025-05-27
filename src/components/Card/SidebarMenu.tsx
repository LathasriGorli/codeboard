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
import { Link } from "@tanstack/react-router";

type headings = {
  id: number;
  title: string;
  icon: any;
  url: string;
};

export function SidebarMenu({ items }: { items: headings[] }) {
  const [activeId, setActiveId] = useState(1);
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
        <LocationName />
      </div>
    </SidebarProvider>
  );
}
