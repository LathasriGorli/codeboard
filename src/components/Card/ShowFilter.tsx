import { FilterIcon, ListFilter } from "lucide-react";
import { Button } from "../ui/button";

export function ShowFilter({onclick} : {onclick: () => void}) {
    return(
        <Button
          variant="outline"
          size="sm"
          onClick={onclick}
          className="flex items-center gap-2 hover:bg-white text-[#4F4F4F] text-xs font-light font-[urbanist]"
        >
        <ListFilter />
          Filter
        </Button>
    )
}