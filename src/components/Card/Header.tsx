import { ArrowDown } from "../icons/ArrowDown";
import { BellIcon } from "../icons/BellIcon";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export function Header({name, role}: {name?:string; role?: string }){
    return(
        <Card className="w-full h-[calc(100vh-43.75rem)] mt-1.5 flex rounded-md bg-(--an-header-background) shadow-none justify-center p-0 border-none">
        <CardContent className="flex items-center gap-3 justify-end px-5">
          <BellIcon className="w-5 h-5"/>
          <div className="flex gap-2 items-center">
          <Avatar className="w-6 h-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <div className="flex flex-col justify-center pr-3">
            <p className="text-(--an-header-title-text-color) font-[urbanist] text-(length:--an-header-title-size) font-normal">{name}</p>
            <p className="text-(--an-header-role-text-color) font-[urbanist] text-(length:--an-header-role-size) font-normal">{role}</p>
          </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-center focus:outline-none"><ArrowDown className="w-4 h-4"/></button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
              <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
      </Card>
    )
}