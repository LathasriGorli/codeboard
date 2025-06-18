import { FilterIcon } from "../icons/FilterIcon";
import { Button } from "../ui/button";

export function ShowFilter({onclick} : {onclick: () => void}) {
    return(
        <Button
          variant="outline"
          size="sm"
          onClick={onclick}
          className="flex items-center gap-2 hover:bg-white text-[#4F4F4F] text-xs font-light font-[urbanist] rounded-sm border"
        >
        <FilterIcon />
          Filter
        </Button>
    )
}