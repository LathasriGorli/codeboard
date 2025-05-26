import { ChevronDown } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "~/components/ui/sidebar";
import { ScrollArea } from "../ui/scroll-area";
import { useState } from "react";

export type User = {
  id: number;
  title: string;
  url: string;
  imgURL: string;
  total_commits: number;
};

export function UsersCard({users}: {users: User[]}) {
  const [activeId, setActiveId] = useState(1);
  return (
        <SidebarProvider>
        <Sidebar className="w-55 rounded-(--an-sidebar-border-radius) h-auto">
        <SidebarContent className="bg-(--an-sidebar-background) rounded-(--an-sidebar-border-radius)">
          <SidebarGroup>
            <SidebarGroupLabel className="p-1 flex justify-between">
                <div className="flex items-center jusitfy-center gap-2">
                <p className="border rounded-md w-6 h-6 p-1 text-(--an-sidebar-text-color) font-(family-name:--an-sidebar-font-family) text-xs font-normal">15</p>
                <span className="text-sm text-(--an-sidebar-text-color) font-(family-name:--an-sidebar-font-family) font-normal">Users</span>
                </div>
                <div className="border rounded-md w-6 h-6 items-center flex justify-center"><ChevronDown className="w-4 h-4 text-(--an-sidebar-text-color)"/></div>
            </SidebarGroupLabel>
              <ScrollArea className="mt-3 pr-2 max-h-[85vh]">
              <SidebarMenu className="gap-2">
                {users && users.length > 0 && users.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild  
                    className={`p-1 rounded-sm ${activeId === item.id ? "bg-(--an-sidebar-active-background) hover:bg-(--an-sidebar-active-background)" : ""}`}
                    onClick={() => setActiveId(item.id)}>
                      <a href={item.url} className="flex items-center h-10">
                        <img src={item.imgURL} alt="" className="w-8 h-8 rounded-sm"/>
                        <p className="text-sm text-(--an-sidebar-text-color) w-25 break-words font-normal font-(family-name:--an-sidebar-font-family)">{item.title}</p>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuBadge className="text-(--an-sidebar-count-color) font-(family-name:--an-sidebar-font-family) text-xs font-normal">{item.total_commits}</SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
              </ScrollArea>
          </SidebarGroup> 
        </SidebarContent>
        <SidebarFooter className="p-2 bg-(--an-sidebar-add-button-background) rounded-b-(--an-sidebar-border-radius)">
        <SidebarMenuButton className="text-base text-(--an-sidebar-add-button-text-color) rounded-none hover:bg-(--an-sidebar-add-button-background) hover:text-(--an-sidebar-add-button-text-color) pl-12 font-(family-name:--an-sidebar-add-buton-font-family) font-medium">+ Add New User</SidebarMenuButton>
        </SidebarFooter>
        </Sidebar>
    </SidebarProvider>
  );
}
