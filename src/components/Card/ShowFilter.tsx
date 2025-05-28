import { FilterIcon } from "lucide-react";
import { Button } from "../ui/button";

export function ShowFilter({onclick} : {onclick: () => void}) {
    return(
        <Button
          variant="outline"
          size="sm"
          onClick={onclick}
          className="flex items-center gap-2 hover:bg-white"
        >
          <FilterIcon className="w-4 h-4" />
          Filter
        </Button>
    )
}