import { ArrowDown } from "../icons/ArrowDown";
import { BellIcon } from "../icons/BellIcon";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export function Header({name, role}: {name?:string; role?: string }){
    return(
        <Card className="w-full h-[50px] m-1 flex rounded-lg bg-(--an-header-background) shadow-none justify-center p-4 border-none">
        <div className="flex items-center gap-5 justify-end p-0">
          <BellIcon />
          <div className="flex gap-2 items-center">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <div className="flex flex-col justify-center">
            <p className="text-(--an-header-title-text-color) font-[urbanist] text-(length:--an-header-title-size) font-normal">{name}</p>
            <p className="text-(--an-header-role-text-color) font-[urbanist] text-(length:--an-header-role-size) font-normal">{role}</p>
          </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-center focus:outline-none"><ArrowDown /></button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
              <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>
    )
}